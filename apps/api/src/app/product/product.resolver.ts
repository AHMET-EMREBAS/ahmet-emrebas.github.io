import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entity/product.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { ProductObject } from './entity';
import { CreateProductInput, QueryProductArg } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Resolver(() => ProductObject)
export class ProductResolver {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Query(() => [ProductObject])
  products(@Args('query') query: QueryProductArg) {
    return this.repo.find(query);
  }

  @Mutation(() => ProductObject)
  createProduct(@Args('body') body: CreateProductInput) {
    return this.repo.save(body);
  }
}
