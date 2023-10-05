import { Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import {
  ForgotPasswordDto,
  LoginWithCodeDto,
  ResetPasswordWithCodeDto,
} from './dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { OAuth2Client } from 'google-auth-library';
import { Body, Public } from '@techbir/core';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: LoginDto) {
    const access_code = await this.authService.login(body);
    return { access_code };
  }

  @Public()
  @Post('signup')
  async signup(@Body() body: SignupDto) {
    const access_code = await this.authService.signup({
      ...body,
    });
    return { access_code };
  }

  @Public()
  @Post('forgot-password')
  async forgotPassword(@Body() body: ForgotPasswordDto) {
    return await this.authService.forgotPassword(body);
  }

  @Post('login-with-code')
  async loginWithCode(@Body() body: LoginWithCodeDto) {
    const access_code = await this.authService.loginWithCode(body);
    return { access_code };
  }

  @Post('reset-password-with-code')
  async resetPasswordWithCode(@Body() body: ResetPasswordWithCodeDto) {
    const access_code = await this.authService.resetPasswordWithCode(body);
    return { access_code };
  }

  @Post('signup-with-google')
  async signupWithGoogle(@Body() body: any) {
    console.log(await this.getDecodedOAuthJwtGoogle(body.credential));
  }

  @Post('signin-with-google')
  async signInWithGoogle(@Body() body: any) {
    console.log(await this.getDecodedOAuthJwtGoogle(body.credential));
  }

  async getDecodedOAuthJwtGoogle(token: string) {
    const CLIENT_ID_GOOGLE = process.env['GOOGLE_CLIENT_ID'];

    try {
      const client = new OAuth2Client(CLIENT_ID_GOOGLE);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID_GOOGLE,
      });

      return ticket;
    } catch (error) {
      return { status: 500, data: error };
    }
  }
}
