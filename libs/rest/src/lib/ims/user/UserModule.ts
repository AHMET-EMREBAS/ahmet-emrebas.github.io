import { Permission } from '@ae/models/ims/permission';

import { Pricelevel } from '@ae/models/ims/pricelevel';

import { User, UserView } from '@ae/models/ims/user';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserViewService } from './UserViewService';
import { UserController } from './UserController';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView, Permission, Pricelevel])],
  providers: [UserService, UserViewService],
  controllers: [UserController],
})
export class UserModule {}
