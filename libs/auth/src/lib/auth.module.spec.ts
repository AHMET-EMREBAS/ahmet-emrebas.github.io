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

const EXISTING_CLIENT_USERNAME = 'job@aemrebas.com';
const EXISTING_CLIENT_PASSWORD = '!MyStrongPaswrod1';
const NEW_CLIENT_USERNAME = 'info@aemrebas.com';
const NEW_CLIENT_PASSWORD = '!MyStrongPaswrod1';

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
        username: EXISTING_CLIENT_USERNAME,
        password: EXISTING_CLIENT_PASSWORD,
      });
    });

    it('should login', async () => {
      const token = await authService.login({
        username: EXISTING_CLIENT_USERNAME,
        password: EXISTING_CLIENT_PASSWORD,
      });

      expect(token).toBeDefined();
    });

    it('should signup', async () => {
      const token = await authService.signup({
        username: NEW_CLIENT_USERNAME,
        password: NEW_CLIENT_PASSWORD,
      });
      expect(token).toBeDefined();
    });

    describe('Forgot Password', () => {
      let code: string | undefined;

      beforeAll(async () => {
        await authService.forgotPassword({
          username: EXISTING_CLIENT_USERNAME,
        });

        code = authService.__getSecurityCode(EXISTING_CLIENT_USERNAME);
      });
      it('should create a security code for the user ', async () => {
        expect(code).toBeDefined();
      });

      it('should login with code', async () => {
        const token = await authService.loginWithCode({
          username: EXISTING_CLIENT_USERNAME,
          code: code || '',
        });

        expect(token).toBeDefined();
      });
    });
  });
});
