import {
  Add,
  Count,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Category } from '@ae/models/ims/category/Category';
import { CategoryView } from '@ae/models/ims/category/CategoryView';
import { CategoryOptionView } from '@ae/models/ims/category/CategoryOptionView';
import {
  CreateCategoryDto,
  GraphCreateCategoryDto,
} from '@ae/models/ims/category/dto/CreateCategoryDto';
import { UpdateCategoryDto } from '@ae/models/ims/category/dto/UpdateCategoryDto';

import { Body, Delete, Query } from '@nestjs/common';

import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/category', Category)
export class CategoryController {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService
  ) {}

  @Read(Category)
  findCategory(
    @Args('query') @Query() query: QueryDto<Category & CategoryView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Category)
  findByCategoryId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Category)
  saveCategory(
    @Args('category', { type: () => GraphCreateCategoryDto })
    @Body()
    body: CreateCategoryDto
  ) {
    return this.service.save(body.category);
  }

  @Update()
  updateCategory(
    @ArgId() @ParamId() id: number,
    @Args('category') @Body() body: UpdateCategoryDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCategory(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countCategory() {
    return this.service.count();
  }
}
