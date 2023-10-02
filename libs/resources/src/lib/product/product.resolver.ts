import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateProductInput,
  Product,
  UpdateProductInput,
} from '@techbir/entities-graph';
import { ProductService, ProductPubSub } from './product.service';

@Resolver(() => Product)
export class ProductResolver extends createResolver({
  entity: Product,
  createDto: CreateProductInput,
  queryDto: QueryInput,
  pubSub: ProductPubSub,
  updateDto: UpdateProductInput,
}) {
  constructor(service: ProductService) {
    super(service);
  }
}
