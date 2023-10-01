import { Controller, Injectable, Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { QueryDto, ResourceService, createController } from '@techbir/core';
import { Category, Product } from '@techbir/entities';
import { PubSub } from 'graphql-subscriptions';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends ResourceService {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, []);
  }
}

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
  providers: [ProductService],
})
export class ProductModule {}
