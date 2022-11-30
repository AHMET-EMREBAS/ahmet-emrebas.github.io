import {
  Add,
  Aggregate,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
} from '@ae/core';
import { Body, Controller, Delete, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<any>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@Param('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: any) {
    return this.service.save(body);
  }

  @Update()
  update(@Param('id') id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Set('category')
  setCategory(id: number, categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Unset('category')
  unsetCategory(id: number) {
    return this.service.unset(id, 'category');
  }

  @Add('category')
  addCategory(id: number, categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Remove('category')
  removeCategory(id: number) {
    return this.service.unset(id, 'category');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
