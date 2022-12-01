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
import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';
import { CreateStoreDto } from '@ae/models/ims/store/dto/CreateStoreDto';
import { UpdateStoreDto } from '@ae/models/ims/store/dto/UpdateStoreDto';

import { Body, Delete, Query } from '@nestjs/common';

import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/store', Store)
export class StoreController {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService
  ) {}

  @Read(Store)
  findStore(@Args('query') @Query() query: QueryDto<Store & StoreView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Store)
  findByStoreId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Store)
  saveStore(@Args('store') @Body() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Update()
  updateStore(
    @ArgId() @ParamId() id: number,
    @Args('store') @Body() body: UpdateStoreDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteStore(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setStorePricelevel(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() pricelevelId: number
  ) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetStorePricelevel(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countStore() {
    return this.service.count();
  }
}
