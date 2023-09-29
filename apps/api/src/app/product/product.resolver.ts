import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Product, ProductObject } from './entity';
import { CreateProductInput, QueryProductInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishProductDelete,
  publishProductSave,
  publishProductUpdate,
  subscribeProductDelete,
  subscribeProductSave,
  subscribeProductUpdate,
} from './product.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => ProductObject)
export class ProductResolver {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Query(() => [ProductObject])
  findProducts(@Args('query', ValidationPipe()) query: QueryProductInput) {
    return this.repo.find(query);
  }

  @Query(() => ProductObject)
  findProductsById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => ProductObject)
  async createProduct(
    @Args('body', ValidationPipe()) body: CreateProductInput
  ) {
    const saved = await this.repo.save(body);
    publishProductSave(saved);
    return saved;
  }

  @Mutation(() => ProductObject)
  async updateProduct(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreateProductInput
  ) {
    const updated = await this.repo.update(id, body);
    publishProductUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => ProductObject)
  async deleteProduct(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishProductDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => ProductObject)
  productSaveEvent() {
    return subscribeProductSave();
  }

  @Subscription(() => ProductObject)
  productDeleteEvent() {
    return subscribeProductDelete();
  }

  @Subscription(() => ProductObject)
  productUpdateEvent() {
    return subscribeProductUpdate();
  }
}
