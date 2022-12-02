import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';
import { CreateStoreDto } from '@ae/models/ims/store/dto/CreateStoreDto';
import { UpdateStoreDto } from '@ae/models/ims/store/dto/UpdateStoreDto';

import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { StoreOptionViewService } from './StoreOptionViewService';

@Resolver(Store)
export class StoreResolver {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService,
    private readonly optionViewService: StoreOptionViewService
  ) {}

  @GRead(Store)
  findStore(@Args('query') query: QueryDto<Store & StoreView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Store)
  findByStoreId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Store)
  saveStore(@Args('store') body: CreateStoreDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateStore(@ArgId() id: number, @Args('store') body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteStore(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('pricelevel')
  setStorePricelevel(@ArgId() id: number, @ArgRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @GUnset('pricelevel')
  unsetStorePricelevel(@ArgId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @GCount()
  countStore() {
    return this.service.count();
  }

  @GOptions()
  optionsStore(@Args('query') query: QueryDto<Store & StoreView>) {
    return this.optionViewService.find(query);
  }
}
