import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import {
  CreateCategoryDto,
  Category,
  UpdateCategoryDto,
} from '@techbir/entities';
import { CategoryService, CategoryPubSub } from './category.service';

@Controller()
export class CategoryController extends createController({
  createDto: CreateCategoryDto,
  entity: Category,
  pubSub: CategoryPubSub,
  queryDto: QueryDto,
  updateDto: UpdateCategoryDto,
}) {
  constructor(service: CategoryService) {
    super(service);
  }
}
