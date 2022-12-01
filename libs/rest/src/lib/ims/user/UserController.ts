import {
  Add,
  Count,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { User } from '@ae/models/ims/user/User';
import { UserView } from '@ae/models/ims/user/UserView';
import { UserOptionView } from '@ae/models/ims/user/UserOptionView';
import { CreateUserDto } from '@ae/models/ims/user/dto/CreateUserDto';
import { UpdateUserDto } from '@ae/models/ims/user/dto/UpdateUserDto';

import { Body, Delete, Query } from '@nestjs/common';

import { UserService } from './UserService';
import { UserViewService } from './UserViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/user', User)
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService
  ) {}

  @Read(User)
  findUser(@Args('query') @Query() query: QueryDto<User & UserView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(User)
  findByUserId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(User)
  saveUser(@Args('user') @Body() body: CreateUserDto) {
    return this.service.save(body);
  }

  @Update()
  updateUser(
    @ArgId() @ParamId() id: number,
    @Args('user') @Body() body: UpdateUserDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteUser(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addUserPermissions(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() permissionsId: number
  ) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removeUserPermissions(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setUserPricelevel(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() pricelevelId: number
  ) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetUserPricelevel(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countUser() {
    return this.service.count();
  }
}
