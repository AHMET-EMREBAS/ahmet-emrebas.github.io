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
import { Project } from '@ae/models/pms/project/Project';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';
import { CreateProjectDto } from '@ae/models/pms/project/dto/CreateProjectDto';
import { UpdateProjectDto } from '@ae/models/pms/project/dto/UpdateProjectDto';

import { Body, Delete, Query } from '@nestjs/common';

import { ProjectService } from './ProjectService';
import { ProjectViewService } from './ProjectViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/project', Project)
export class ProjectController {
  constructor(
    private readonly service: ProjectService,
    private readonly viewService: ProjectViewService
  ) {}

  @Read(Project)
  findProject(@Args('query') @Query() query: QueryDto<Project & ProjectView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Project)
  findByProjectId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Project)
  saveProject(@Args('project') @Body() body: CreateProjectDto) {
    return this.service.save(body);
  }

  @Update()
  updateProject(
    @ArgId() @ParamId() id: number,
    @Args('project') @Body() body: UpdateProjectDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteProject(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countProject() {
    return this.service.count();
  }
}
