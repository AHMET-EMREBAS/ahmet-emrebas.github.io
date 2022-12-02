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

import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/pms/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/pms/pricelevel/PricelevelOptionView';
import { CreatePricelevelDto } from '@ae/models/pms/pricelevel/dto/CreatePricelevelDto';
import { UpdatePricelevelDto } from '@ae/models/pms/pricelevel/dto/UpdatePricelevelDto';

import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { PricelevelOptionViewService } from './PricelevelOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/pricelevel')
export class PricelevelController {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService,
    private readonly optionViewService: PricelevelOptionViewService
  ) {}

  @Read()
  findPricelevel(@Query() query: QueryDto<Pricelevel & PricelevelView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByPricelevelId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  savePricelevel(@Body() body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @Update()
  updatePricelevel(@ParamId() id: number, @Body() body: UpdatePricelevelDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePricelevel(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countPricelevel() {
    return this.service.count();
  }

  @Options()
  optionsPricelevel(@Query() query: QueryDto<Pricelevel & PricelevelView>) {
    return this.optionViewService.find(query);
  }
}
