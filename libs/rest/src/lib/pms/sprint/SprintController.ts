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

import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';
import { CreateSprintDto } from '@ae/models/pms/sprint/dto/CreateSprintDto';
import { UpdateSprintDto } from '@ae/models/pms/sprint/dto/UpdateSprintDto';

import { SprintService } from './SprintService';
import { SprintViewService } from './SprintViewService';
import { SprintOptionViewService } from './SprintOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/sprint')
export class SprintController {
  constructor(
    private readonly service: SprintService,
    private readonly viewService: SprintViewService,
    private readonly optionViewService: SprintOptionViewService
  ) {}

  @Read()
  findSprint(@Query() query: QueryDto<Sprint & SprintView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findBySprintId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveSprint(@Body() body: CreateSprintDto) {
    return this.service.save(body);
  }

  @Update()
  updateSprint(@ParamId() id: number, @Body() body: UpdateSprintDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteSprint(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('project')
  setSprintProject(@ParamId() id: number, @ParamRid() projectId: number) {
    return this.service.set(id, projectId, 'project');
  }

  @Unset('project')
  unsetSprintProject(@ParamId() id: number) {
    return this.service.unset(id, 'project');
  }

  @Count()
  countSprint() {
    return this.service.count();
  }

  @Options()
  optionsSprint(@Query() query: QueryDto<Sprint & SprintView>) {
    return this.optionViewService.find(query);
  }
}
