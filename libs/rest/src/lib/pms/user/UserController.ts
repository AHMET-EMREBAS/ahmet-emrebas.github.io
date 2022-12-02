import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { User } from '@ae/models/pms/user/User';
import { UserView } from '@ae/models/pms/user/UserView';
import { UserOptionView } from '@ae/models/pms/user/UserOptionView';
import { CreateUserDto } from '@ae/models/pms/user/dto/CreateUserDto';
import { UpdateUserDto } from '@ae/models/pms/user/dto/UpdateUserDto';

import { UserService } from './UserService';
import { UserViewService } from './UserViewService';
import { UserOptionViewService } from './UserOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/user')
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService,
    private readonly optionViewService: UserOptionViewService
  ) {}

  @Read()
  findUser(@Query() query: QueryDto<User & UserView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByUserId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveUser(@Body() body: CreateUserDto) {
    return this.service.save(body);
  }

  @Update()
  updateUser(@ParamId() id: number, @Body() body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteUser(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addUserPermissions(@ParamId() id: number, @ParamRid() permissionsId: number) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removeUserPermissions(@ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setUserPricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetUserPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countUser() {
    return this.service.count();
  }

  @Options()
  optionsUser(@Query() query: QueryDto<User & UserView>) {
    return this.optionViewService.find(query);
  }
}
