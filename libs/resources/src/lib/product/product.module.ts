import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryDto, createController } from '@techbir/core';
import { Category, Product } from '@techbir/entities';
import { PubSub } from 'graphql-subscriptions';
import { ProductResolver } from './resolver';
import { ProductService } from './product.service';

@Controller()
export class ProductController extends createController({
  createDto: Product,
  entity: Product,
  pubSub: new PubSub(),
  queryDto: QueryDto,
  updateDto: Product,
}) {
  constructor(service: ProductService) {
    super(service);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
