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

import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';
import { CreateStoreDto } from '@ae/models/ims/store/dto/CreateStoreDto';
import { UpdateStoreDto } from '@ae/models/ims/store/dto/UpdateStoreDto';

import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { StoreOptionViewService } from './StoreOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/store')
export class StoreController {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService,
    private readonly optionViewService: StoreOptionViewService
  ) {}

  @Read()
  findStore(@Query() query: QueryDto<Store & StoreView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByStoreId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveStore(@Body() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Update()
  updateStore(@ParamId() id: number, @Body() body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteStore(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setStorePricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetStorePricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countStore() {
    return this.service.count();
  }

  @Options()
  optionsStore(@Query() query: QueryDto<Store & StoreView>) {
    return this.optionViewService.find(query);
  }
}
