import {
  Add,
  Aggregate,
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
import {
  Pricelevel,
  PricelevelView,
  CreatePricelevelDto,
  UpdatePricelevelDto,
} from '@ae/models/ims/pricelevel';
import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';

@ApiTags('pricelevel')
@Controller('pricelevel')
export class PricelevelController {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Pricelevel & PricelevelView>) {
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
  save(@Body() body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdatePricelevelDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
