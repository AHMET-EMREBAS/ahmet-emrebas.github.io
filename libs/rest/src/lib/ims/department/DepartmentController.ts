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

import { Department } from '@ae/models/ims/department/Department';
import { DepartmentView } from '@ae/models/ims/department/DepartmentView';
import { DepartmentOptionView } from '@ae/models/ims/department/DepartmentOptionView';
import { CreateDepartmentDto } from '@ae/models/ims/department/dto/CreateDepartmentDto';
import { UpdateDepartmentDto } from '@ae/models/ims/department/dto/UpdateDepartmentDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './DepartmentService';
import { DepartmentViewService } from './DepartmentViewService';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(
    private readonly service: DepartmentService,
    private readonly viewService: DepartmentViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Department & DepartmentView>) {
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
  save(@Body() body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateDepartmentDto) {
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
