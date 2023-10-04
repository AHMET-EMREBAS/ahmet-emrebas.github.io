import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { MockDbWithEntities } from '@techbir/core';
import { Permission, Role, User } from '@techbir/entities';

import { AuthController } from './auth.controller';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GmailModule } from '@techbir/mail';
import { JwtModule } from '@nestjs/jwt';
import { v4 } from 'uuid';

describe('Auth Module', () => {
  let authService: AuthService;
  let authController: AuthController;
  let userRepo: Repository<User>;

  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ...MockDbWithEntities('auth', [User, Role, Permission]),
        GmailModule,
        JwtModule.register({
          secret: v4(),
          signOptions: {
            expiresIn: '30d',
          },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    app = await app.init();

    authService = app.get(AuthService);
    authController = app.get(AuthController);
    userRepo = app.get(getRepositoryToken(User));
  });

  it.each`
    name                        | value
    ${AuthService.name}         | ${AuthService}
    ${AuthController.name}      | ${AuthController}
    ${User.name + 'Repository'} | ${getRepositoryToken(User)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });

  describe('AuthService', () => {
    beforeAll(async () => {
      await authService.signup({
        username: 'job@aemrebas.com',
        password: '!MyStrongPaswrod1',
      });
    });

    it('should forgot-password', async () => {
      const message = await authService.forgotPassword({
        username: 'job@aemrebas.com',
      });
      expect(message).toBeDefined();
    });

    it('should login', async () => {
      const token = await authService.login({
        username: 'job@aemrebas.com',
        password: '!MyStrongPaswrod1',
      });

      expect(token).toBeDefined();
    });

    it('should signup', async () => {
      const token = await authService.signup({
        username: 'info@aemrebas.com',
        password: '!MyStrongPaswrod1',
      });
      expect(token).toBeDefined();
    });
  });
});
