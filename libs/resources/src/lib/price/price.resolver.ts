import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Price, PriceObject } from './entity';
import { CreatePriceInput, QueryPriceInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishPriceDelete,
  publishPriceSave,
  publishPriceUpdate,
  subscribePriceDelete,
  subscribePriceSave,
  subscribePriceUpdate,
} from './price.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => PriceObject)
export class PriceResolver {
  constructor(
    @InjectRepository(Price) private readonly repo: Repository<Price>
  ) {}

  @Query(() => [PriceObject])
  findPrices(@Args('query', ValidationPipe()) query: QueryPriceInput) {
    return this.repo.find(query);
  }

  @Query(() => PriceObject)
  findPricesById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => PriceObject)
  async createPrice(@Args('body', ValidationPipe()) body: CreatePriceInput) {
    const saved = await this.repo.save(body);
    publishPriceSave(saved);
    return saved;
  }

  @Mutation(() => PriceObject)
  async updatePrice(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreatePriceInput
  ) {
    const updated = await this.repo.update(id, body);
    publishPriceUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => PriceObject)
  async deletePrice(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishPriceDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => PriceObject)
  priceSaveEvent() {
    return subscribePriceSave();
  }

  @Subscription(() => PriceObject)
  priceDeleteEvent() {
    return subscribePriceDelete();
  }

  @Subscription(() => PriceObject)
  priceUpdateEvent() {
    return subscribePriceUpdate();
  }
}
