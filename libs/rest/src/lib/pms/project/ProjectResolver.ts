import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Project } from '@ae/models/pms/project/Project';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';
import { CreateProjectDto } from '@ae/models/pms/project/dto/CreateProjectDto';
import { UpdateProjectDto } from '@ae/models/pms/project/dto/UpdateProjectDto';

import { ProjectService } from './ProjectService';
import { ProjectViewService } from './ProjectViewService';
import { ProjectOptionViewService } from './ProjectOptionViewService';

@Resolver(Project)
export class ProjectResolver {
  constructor(
    private readonly service: ProjectService,
    private readonly viewService: ProjectViewService,
    private readonly optionViewService: ProjectOptionViewService
  ) {}

  @GRead(Project)
  findProject(@Args('query') query: QueryDto<Project & ProjectView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Project)
  findByProjectId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Project)
  saveProject(@Args('project') body: CreateProjectDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateProject(@ArgId() id: number, @Args('project') body: UpdateProjectDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteProject(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countProject() {
    return this.service.count();
  }

  @GOptions()
  optionsProject(@Args('query') query: QueryDto<Project & ProjectView>) {
    return this.optionViewService.find(query);
  }
}
