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
} from '@ae/core';

import { User } from '@ae/models/pms/user/User';
import { UserView } from '@ae/models/pms/user/UserView';
import { UserOptionView } from '@ae/models/pms/user/UserOptionView';
import { CreateUserDto } from '@ae/models/pms/user/dto/CreateUserDto';
import { UpdateUserDto } from '@ae/models/pms/user/dto/UpdateUserDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './UserService';
import { UserViewService } from './UserViewService';

@ApiTags('pms | User')
@Controller('pms/user')
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<User & UserView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateUserDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addPermissions(@ParamId() id: number, @ParamRid() permissionsId: number) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removePermissions(@ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setPricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  count() {
    return this.service.count();
  }
}
