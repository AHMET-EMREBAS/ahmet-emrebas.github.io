import { Permission } from '@ae/models/ims/permission/Permission';

import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';

import { User } from '@ae/models/ims/user/User';
import { UserView } from '@ae/models/ims/user/UserView';
import { UserOptionView } from '@ae/models/ims/user/UserOptionView';

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
