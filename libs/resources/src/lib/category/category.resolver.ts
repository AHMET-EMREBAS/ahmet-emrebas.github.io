import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateCategoryInput,
  Category,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { CategoryService, CategoryPubSub } from './category.service';

@Resolver(() => Category)
export class CategoryResolver extends createResolver({
  entity: Category,
  createDto: CreateCategoryInput,
  queryDto: QueryInput,
  pubSub: CategoryPubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: CategoryService) {
    super(service);
  }
}
