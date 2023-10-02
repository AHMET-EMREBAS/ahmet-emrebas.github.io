import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateStoreInput,
  Store,
  UpdateStoreInput,
} from '@techbir/entities-graph';
import { StoreService, StorePubSub } from './store.service';

@Resolver(() => Store)
export class StoreResolver extends createResolver({
  entity: Store,
  createDto: CreateStoreInput,
  queryDto: QueryInput,
  pubSub: StorePubSub,
  updateDto: UpdateStoreInput,
}) {
  constructor(service: StoreService) {
    super(service);
  }
}
