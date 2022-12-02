import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Category } from '@ae/models/ims/category/Category';
import { CategoryView } from '@ae/models/ims/category/CategoryView';
import { CategoryOptionView } from '@ae/models/ims/category/CategoryOptionView';
import { CreateCategoryDto } from '@ae/models/ims/category/dto/CreateCategoryDto';
import { UpdateCategoryDto } from '@ae/models/ims/category/dto/UpdateCategoryDto';
import { ReadCategoryDto } from '@ae/models/ims/category/dto/ReadCategoryDto';
import { QueryCategoryDto } from '@ae/models/ims/category/dto/QueryCategoryDto';

import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { CategoryOptionViewService } from './CategoryOptionViewService';

@Resolver(Category)
export class CategoryResolver {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService,
    private readonly optionViewService: CategoryOptionViewService
  ) {}

  @GRead(ReadCategoryDto)
  findCategorys(
    @Args('query', { nullable: true }) query: QueryDto<Category>,
    @Args('where', { nullable: true }) where: QueryCategoryDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(CategoryView)
  viewCategorys(
    @Args('query', { nullable: true }) query: QueryDto<CategoryView>,
    @Args('where', { nullable: true }) where: QueryCategoryDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadCategoryDto)
  findByCategoryId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(CategoryView)
  viewByCategoryId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadCategoryDto)
  saveCategory(@Args('category') body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadCategoryDto)
  saveCategorys(
    @Args('categorys', { type: () => [CreateCategoryDto] })
    body: CreateCategoryDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateCategory(
    @ArgId() id: number,
    @Args('category') body: UpdateCategoryDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteCategory(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countCategory() {
    return this.service.count();
  }

  @GOptions()
  optionsCategory(@Args('query') query: QueryDto<CategoryOptionView>) {
    return this.optionViewService.find(query);
  }
}
