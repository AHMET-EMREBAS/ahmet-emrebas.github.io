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

import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';
import { CreateStoreDto } from '@ae/models/ims/store/dto/CreateStoreDto';
import { UpdateStoreDto } from '@ae/models/ims/store/dto/UpdateStoreDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';

@ApiTags('store')
@Controller('store')
export class StoreController {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Store & StoreView>) {
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
  save(@Body() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setPricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
