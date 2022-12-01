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

import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';
import { PricelevelView } from '@ae/models/ims/pricelevel/PricelevelView';
import { PricelevelOptionView } from '@ae/models/ims/pricelevel/PricelevelOptionView';
import { CreatePricelevelDto } from '@ae/models/ims/pricelevel/dto/CreatePricelevelDto';
import { UpdatePricelevelDto } from '@ae/models/ims/pricelevel/dto/UpdatePricelevelDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PricelevelService } from './PricelevelService';
import { PricelevelViewService } from './PricelevelViewService';

@ApiTags('ims | Pricelevel')
@Controller('ims/pricelevel')
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

  @Count()
  count() {
    return this.service.count();
  }
}
