import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Quantity, QuantityObject } from './entity';
import { CreateQuantityInput, QueryQuantityInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishQuantityDelete,
  publishQuantitySave,
  publishQuantityUpdate,
  subscribeQuantityDelete,
  subscribeQuantitySave,
  subscribeQuantityUpdate,
} from './quantity.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => QuantityObject)
export class QuantityResolver {
  constructor(
    @InjectRepository(Quantity) private readonly repo: Repository<Quantity>
  ) {}

  @Query(() => [QuantityObject])
  findQuantitys(@Args('query', ValidationPipe()) query: QueryQuantityInput) {
    return this.repo.find(query);
  }

  @Query(() => QuantityObject)
  findQuantitysById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => QuantityObject)
  async createQuantity(
    @Args('body', ValidationPipe()) body: CreateQuantityInput
  ) {
    const saved = await this.repo.save(body);
    publishQuantitySave(saved);
    return saved;
  }

  @Mutation(() => QuantityObject)
  async updateQuantity(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreateQuantityInput
  ) {
    const updated = await this.repo.update(id, body);
    publishQuantityUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => QuantityObject)
  async deleteQuantity(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishQuantityDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => QuantityObject)
  quantitySaveEvent() {
    return subscribeQuantitySave();
  }

  @Subscription(() => QuantityObject)
  quantityDeleteEvent() {
    return subscribeQuantityDelete();
  }

  @Subscription(() => QuantityObject)
  quantityUpdateEvent() {
    return subscribeQuantityUpdate();
  }
}
