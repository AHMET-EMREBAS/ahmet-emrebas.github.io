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

import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';
import { CreateSprintDto } from '@ae/models/pms/sprint/dto/CreateSprintDto';
import { UpdateSprintDto } from '@ae/models/pms/sprint/dto/UpdateSprintDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SprintService } from './SprintService';
import { SprintViewService } from './SprintViewService';

@ApiTags('pms | Sprint')
@Controller('pms/sprint')
export class SprintController {
  constructor(
    private readonly service: SprintService,
    private readonly viewService: SprintViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Sprint & SprintView>) {
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
  save(@Body() body: CreateSprintDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateSprintDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('project')
  setProject(@ParamId() id: number, @ParamRid() projectId: number) {
    return this.service.set(id, projectId, 'project');
  }

  @Unset('project')
  unsetProject(@ParamId() id: number) {
    return this.service.unset(id, 'project');
  }

  @Count()
  count() {
    return this.service.count();
  }
}
