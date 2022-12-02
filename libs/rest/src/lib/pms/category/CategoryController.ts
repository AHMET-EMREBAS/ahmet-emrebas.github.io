import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { Category } from '@ae/models/pms/category/Category';
import { CategoryView } from '@ae/models/pms/category/CategoryView';
import { CategoryOptionView } from '@ae/models/pms/category/CategoryOptionView';
import { CreateCategoryDto } from '@ae/models/pms/category/dto/CreateCategoryDto';
import { UpdateCategoryDto } from '@ae/models/pms/category/dto/UpdateCategoryDto';

import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { CategoryOptionViewService } from './CategoryOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/category')
export class CategoryController {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService,
    private readonly optionViewService: CategoryOptionViewService
  ) {}

  @Read()
  findCategory(@Query() query: QueryDto<Category & CategoryView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByCategoryId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveCategory(@Body() body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Update()
  updateCategory(@ParamId() id: number, @Body() body: UpdateCategoryDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCategory(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countCategory() {
    return this.service.count();
  }

  @Options()
  optionsCategory(@Query() query: QueryDto<Category & CategoryView>) {
    return this.optionViewService.find(query);
  }
}
