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
  GWriteMany,
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
import { ReadStoreDto } from '@ae/models/ims/store/dto/ReadStoreDto';
import { QueryStoreDto } from '@ae/models/ims/store/dto/QueryStoreDto';

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

  @GRead(ReadStoreDto)
  findStores(
    @Args('query', { nullable: true }) query: QueryDto<Store>,
    @Args('where', { nullable: true }) where: QueryStoreDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(StoreView)
  viewStores(
    @Args('query', { nullable: true }) query: QueryDto<StoreView>,
    @Args('where', { nullable: true }) where: QueryStoreDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadStoreDto)
  findByStoreId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(StoreView)
  viewByStoreId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadStoreDto)
  saveStore(@Args('store') body: CreateStoreDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadStoreDto)
  saveStores(
    @Args('stores', { type: () => [CreateStoreDto] })
    body: CreateStoreDto[]
  ) {
    return this.service.saveMany(body);
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
  optionsStore(@Args('query') query: QueryDto<StoreOptionView>) {
    return this.optionViewService.find(query);
  }
}
