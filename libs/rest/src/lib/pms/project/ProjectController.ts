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

import { Project } from '@ae/models/pms/project/Project';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';
import { CreateProjectDto } from '@ae/models/pms/project/dto/CreateProjectDto';
import { UpdateProjectDto } from '@ae/models/pms/project/dto/UpdateProjectDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from './ProjectService';
import { ProjectViewService } from './ProjectViewService';

@ApiTags('pms | Project')
@Controller('pms/project')
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly viewService: ProjectViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Project & ProjectView>) {
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
  save(@Body() body: CreateProjectDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateProjectDto) {
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
