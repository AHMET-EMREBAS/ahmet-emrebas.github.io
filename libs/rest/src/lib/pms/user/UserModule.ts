import { Permission } from '@ae/models/pms/permission/Permission';

import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';

import { User } from '@ae/models/pms/user/User';
import { UserView } from '@ae/models/pms/user/UserView';
import { UserOptionView } from '@ae/models/pms/user/UserOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserViewService } from './UserViewService';
import { UserController } from './UserController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserView,
      UserOptionView,

      Permission,

      Pricelevel,
    ]),
  ],
  providers: [UserService, UserViewService, UserController],
  controllers: [UserController],
})
export class UserModule {}
