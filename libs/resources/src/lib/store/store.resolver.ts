import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Store, StoreObject } from './entity';
import { CreateStoreInput, QueryStoreInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishStoreDelete,
  publishStoreSave,
  publishStoreUpdate,
  subscribeStoreDelete,
  subscribeStoreSave,
  subscribeStoreUpdate,
} from './store.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => StoreObject)
export class StoreResolver {
  constructor(
    @InjectRepository(Store) private readonly repo: Repository<Store>
  ) {}

  @Query(() => [StoreObject])
  findStores(@Args('query', ValidationPipe()) query: QueryStoreInput) {
    return this.repo.find(query);
  }

  @Query(() => StoreObject)
  findStoresById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => StoreObject)
  async createStore(@Args('body', ValidationPipe()) body: CreateStoreInput) {
    const saved = await this.repo.save(body);
    publishStoreSave(saved);
    return saved;
  }

  @Mutation(() => StoreObject)
  async updateStore(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreateStoreInput
  ) {
    const updated = await this.repo.update(id, body);
    publishStoreUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => StoreObject)
  async deleteStore(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishStoreDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => StoreObject)
  storeSaveEvent() {
    return subscribeStoreSave();
  }

  @Subscription(() => StoreObject)
  storeDeleteEvent() {
    return subscribeStoreDelete();
  }

  @Subscription(() => StoreObject)
  storeUpdateEvent() {
    return subscribeStoreUpdate();
  }
}
