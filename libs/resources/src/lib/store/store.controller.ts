import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateStoreDto, Store, UpdateStoreDto } from '@techbir/entities';
import { StoreService, StorePubSub } from './store.service';

@Controller()
export class StoreController extends createController({
  createDto: CreateStoreDto,
  entity: Store,
  pubSub: StorePubSub,
  queryDto: QueryDto,
  updateDto: UpdateStoreDto,
}) {
  constructor(service: StoreService) {
    super(service);
  }
}
