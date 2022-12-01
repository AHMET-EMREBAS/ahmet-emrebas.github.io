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
import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';
import { CreateSprintDto } from '@ae/models/pms/sprint/dto/CreateSprintDto';
import { UpdateSprintDto } from '@ae/models/pms/sprint/dto/UpdateSprintDto';

import { Body, Delete, Query } from '@nestjs/common';

import { SprintService } from './SprintService';
import { SprintViewService } from './SprintViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/sprint', Sprint)
export class SprintController {
  constructor(
    private readonly service: SprintService,
    private readonly viewService: SprintViewService
  ) {}

  @Read(Sprint)
  findSprint(@Args('query') @Query() query: QueryDto<Sprint & SprintView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Sprint)
  findBySprintId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Sprint)
  saveSprint(@Args('sprint') @Body() body: CreateSprintDto) {
    return this.service.save(body);
  }

  @Update()
  updateSprint(
    @ArgId() @ParamId() id: number,
    @Args('sprint') @Body() body: UpdateSprintDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteSprint(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('project')
  setSprintProject(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() projectId: number
  ) {
    return this.service.set(id, projectId, 'project');
  }

  @Unset('project')
  unsetSprintProject(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'project');
  }

  @Count()
  countSprint() {
    return this.service.count();
  }
}
