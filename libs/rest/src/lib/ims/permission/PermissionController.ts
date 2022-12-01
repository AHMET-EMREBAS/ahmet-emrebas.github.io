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
import { Permission } from '@ae/models/ims/permission/Permission';
import { PermissionView } from '@ae/models/ims/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/ims/permission/PermissionOptionView';
import { CreatePermissionDto } from '@ae/models/ims/permission/dto/CreatePermissionDto';
import { UpdatePermissionDto } from '@ae/models/ims/permission/dto/UpdatePermissionDto';

import { Body, Delete, Query } from '@nestjs/common';

import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/permission', Permission)
export class PermissionController {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService
  ) {}

  @Read(Permission)
  findPermission(
    @Args('query') @Query() query: QueryDto<Permission & PermissionView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Permission)
  findByPermissionId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Permission)
  savePermission(@Args('permission') @Body() body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @Update()
  updatePermission(
    @ArgId() @ParamId() id: number,
    @Args('permission') @Body() body: UpdatePermissionDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePermission(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countPermission() {
    return this.service.count();
  }
}
