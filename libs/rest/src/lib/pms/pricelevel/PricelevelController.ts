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
import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/pms/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/pms/pricelevel/PricelevelOptionView';
import { CreatePricelevelDto } from '@ae/models/pms/pricelevel/dto/CreatePricelevelDto';
import { UpdatePricelevelDto } from '@ae/models/pms/pricelevel/dto/UpdatePricelevelDto';

import { Body, Delete, Query } from '@nestjs/common';

import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/pricelevel', Pricelevel)
export class PricelevelController {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService
  ) {}

  @Read(Pricelevel)
  findPricelevel(
    @Args('query') @Query() query: QueryDto<Pricelevel & PricelevelView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Pricelevel)
  findByPricelevelId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Pricelevel)
  savePricelevel(@Args('pricelevel') @Body() body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @Update()
  updatePricelevel(
    @ArgId() @ParamId() id: number,
    @Args('pricelevel') @Body() body: UpdatePricelevelDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePricelevel(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countPricelevel() {
    return this.service.count();
  }
}
