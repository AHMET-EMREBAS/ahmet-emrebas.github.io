import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateProductInput,
  Product,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { PubSub } from 'graphql-subscriptions';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver extends createResolver({
  entity: Product,
  createDto: CreateProductInput,
  queryDto: QueryInput,
  pubSub: new PubSub(),
  updateDto: UpdatePriceInput,
}) {
  constructor(service: ProductService) {
    super(service);
  }
}
