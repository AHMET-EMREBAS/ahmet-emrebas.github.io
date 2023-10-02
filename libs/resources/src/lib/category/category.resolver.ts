import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateCategoryInput,
  Category,
  UpdateCategoryInput,
} from '@techbir/entities-graph';
import { CategoryService, CategoryPubSub } from './category.service';

@Resolver(() => Category)
export class CategoryResolver extends createResolver({
  entity: Category,
  createDto: CreateCategoryInput,
  queryDto: QueryInput,
  pubSub: CategoryPubSub,
  updateDto: UpdateCategoryInput,
}) {
  constructor(service: CategoryService) {
    super(service);
  }
}
