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

import { Project } from '@ae/models/pms/project/Project';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';
import { CreateProjectDto } from '@ae/models/pms/project/dto/CreateProjectDto';
import { UpdateProjectDto } from '@ae/models/pms/project/dto/UpdateProjectDto';

import { ProjectService } from './ProjectService';
import { ProjectViewService } from './ProjectViewService';
import { ProjectOptionViewService } from './ProjectOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/project')
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly viewService: ProjectViewService,
    private readonly optionViewService: ProjectOptionViewService
  ) {}

  @Read()
  findProject(@Query() query: QueryDto<Project & ProjectView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByProjectId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveProject(@Body() body: CreateProjectDto) {
    return this.service.save(body);
  }

  @Update()
  updateProject(@ParamId() id: number, @Body() body: UpdateProjectDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteProject(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countProject() {
    return this.service.count();
  }

  @Options()
  optionsProject(@Query() query: QueryDto<Project & ProjectView>) {
    return this.optionViewService.find(query);
  }
}
