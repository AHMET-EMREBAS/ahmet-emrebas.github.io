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

import { Permission } from '@ae/models/ims/permission/Permission';
import { PermissionView } from '@ae/models/ims/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/ims/permission/PermissionOptionView';
import { CreatePermissionDto } from '@ae/models/ims/permission/dto/CreatePermissionDto';
import { UpdatePermissionDto } from '@ae/models/ims/permission/dto/UpdatePermissionDto';
import { QueryPermissionDto } from '@ae/models/ims/permission/dto/QueryPermissionDto';

import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { PermissionOptionViewService } from './PermissionOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/permission')
export class PermissionController {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService,
    private readonly optionViewService: PermissionOptionViewService
  ) {}

  @Read()
  findPermission(
    @Query() query: QueryDto<Permission & PermissionView>,
    @Query() where: QueryPermissionDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByPermissionId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  savePermission(@Body() body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @Update()
  updatePermission(@ParamId() id: number, @Body() body: UpdatePermissionDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePermission(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countPermission() {
    return this.service.count();
  }

  @Options()
  optionsPermission(@Query() query: QueryDto<Permission & PermissionView>) {
    return this.optionViewService.find(query);
  }
}
