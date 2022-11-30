import {
  Add,
  Aggregate,
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
} from '@ae/core';
import {
  Category,
  CategoryView,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@ae/models/ims/category';
import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Category & CategoryView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateCategoryDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
