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

import { Permission } from '@ae/models/ims/permission/Permission';
import { PermissionView } from '@ae/models/ims/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/ims/permission/PermissionOptionView';
import { CreatePermissionDto } from '@ae/models/ims/permission/dto/CreatePermissionDto';
import { UpdatePermissionDto } from '@ae/models/ims/permission/dto/UpdatePermissionDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';

@ApiTags('permission')
@Controller('permission')
export class PermissionController {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Permission & PermissionView>) {
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
  save(@Body() body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdatePermissionDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  count() {
    return this.service.count();
  }
}
