import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ForgotPasswordDto,
  LoginDto,
  LoginWithCodeDto,
  ResetPasswordWithCodeDto,
  SignupDto,
} from './dto';
import { v4 } from 'uuid';
import { compareSync } from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@techbir/entities';
import { Repository } from 'typeorm';
import { GmailService } from '@techbir/mail';

@Injectable()
export class SecurityCodeService {}

@Injectable()
export class AuthService {
  private readonly securityCodeMap = new Map<string, string>();
  constructor(
    private readonly jwtService: JwtService,
    private readonly emailService: GmailService,
    @InjectRepository(User) private readonly userService: Repository<User>
  ) {}

  setSecurityCode(username: string) {
    const code = v4();
    this.securityCodeMap.set(username, code);
    return code;
  }

  findByUsername(username: string) {
    return this.userService.findOneBy({ username });
  }

  getSecurityCode(username: string) {
    const code = this.securityCodeMap.get(username);
    this.securityCodeMap.set(username, v4());
    return code;
  }

  sign(body: Partial<User>) {
    return this.jwtService.sign({ ...body });
  }
  verify(token: string): User {
    return this.jwtService.verify(token);
  }

  private comparePassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async login(body: LoginDto) {
    const found = await this.findByUsername(body.username);
    if (found?.password) {
      if (this.comparePassword(body.password, found?.password)) {
        return this.sign(found);
      } else {
        throw new UnauthorizedException('Wrong password!');
      }
    }

    throw new NotFoundException('User not found!');
  }

  async signup(body: SignupDto) {
    const found = await this.findByUsername(body.username);
    if (found) {
      throw new UnprocessableEntityException(`Username's been already token!`);
    }
    const saved = await this.userService.save(body);
    return this.sign(saved);
  }

  async forgotPassword(body: ForgotPasswordDto) {
    const found = await this.findByUsername(body.username);

    if (found) {
      await this.emailService?.security({
        to: body.username,
        text: `Here is your one-time security code. Please click the link below to login.`,
        subject: 'Password Reset',
        code: this.setSecurityCode(body.username),
      });
      return { message: `Check your inbox` };
    }
    throw new UnauthorizedException('User not found!');
  }

  async loginWithCode(body: LoginWithCodeDto) {
    const foundUser = await this.userService.findOneBy({
      username: body.username,
    });

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    const securityCode = this.getSecurityCode(body.username);
    if (securityCode) {
      if (securityCode === body.code) {
        return this.sign(foundUser);
      }
    }
    throw new UnauthorizedException();
  }

  async resetPasswordWithCode(body: ResetPasswordWithCodeDto) {
    const foundUser = await this.userService.findOneBy({
      username: body.username,
    });

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    const securityCode = this.getSecurityCode(body.username);

    if (securityCode) {
      if (securityCode === body.code) {
        await this.userService.update(foundUser.id!, {
          password: body.password,
        });

        const updatedUser = await this.userService.findOneBy({
          id: foundUser.id,
        });
        return this.sign(updatedUser!);
      }
    }
    throw new UnauthorizedException();
  }
}
