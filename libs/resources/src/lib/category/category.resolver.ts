import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Category, CategoryObject } from './entity';
import { CreateCategoryInput, QueryCategoryInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishCategoryDelete,
  publishCategorySave,
  publishCategoryUpdate,
  subscribeCategoryDelete,
  subscribeCategorySave,
  subscribeCategoryUpdate,
} from './category.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => CategoryObject)
export class CategoryResolver {
  constructor(
    @InjectRepository(Category) private readonly repo: Repository<Category>
  ) {}

  @Query(() => [CategoryObject])
  findCategorys(@Args('query', ValidationPipe()) query: QueryCategoryInput) {
    return this.repo.find(query);
  }

  @Query(() => CategoryObject)
  findCategorysById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => CategoryObject)
  async createCategory(
    @Args('body', ValidationPipe()) body: CreateCategoryInput
  ) {
    const saved = await this.repo.save(body);
    publishCategorySave(saved);
    return saved;
  }

  @Mutation(() => CategoryObject)
  async updateCategory(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreateCategoryInput
  ) {
    const updated = await this.repo.update(id, body);
    publishCategoryUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => CategoryObject)
  async deleteCategory(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishCategoryDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => CategoryObject)
  categorySaveEvent() {
    return subscribeCategorySave();
  }

  @Subscription(() => CategoryObject)
  categoryDeleteEvent() {
    return subscribeCategoryDelete();
  }

  @Subscription(() => CategoryObject)
  categoryUpdateEvent() {
    return subscribeCategoryUpdate();
  }
}
