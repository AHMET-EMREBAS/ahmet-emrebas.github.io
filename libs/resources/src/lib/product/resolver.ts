import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {  CrateProductInput, Product } from '@techbir/entities-graph';
import { PubSub } from 'graphql-subscriptions';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver extends createResolver({
  entity: Product,
  createDto: CrateProductInput,
  queryDto: QueryInput,
  pubSub: new PubSub(),
  updateDto: CrateProductInput,
}) {
  constructor(service: ProductService) {
    super(service);
  }
}
