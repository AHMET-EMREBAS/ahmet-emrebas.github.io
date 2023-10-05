import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Role, Permission } from '@techbir/entities';
import { GmailModule } from '@techbir/mail';
import { v4 } from 'uuid';
import { AuthGuard, PermissionGuard } from './guards';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User, Role, Permission]),
    GmailModule,
    JwtModule.register({
      secret: process.env['SECRET'] || v4(),
      signOptions: {
        expiresIn: '30d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, PermissionGuard],
  exports: [AuthService, AuthGuard, PermissionGuard],
})
export class AuthModule {}
