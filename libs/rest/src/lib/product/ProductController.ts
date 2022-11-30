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
  Product,
  ProductView,
  CreateProductDto,
  UpdateProductDto,
} from '@ae/models/ims/product';
import { Body, Controller, Delete, Query } from '@nestjs/common';
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
  find(@Query() query: QueryDto<Product & ProductView>) {
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
  save(@Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('category')
  setCategory(@ParamId() id: number, @ParamRid() categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Unset('category')
  unsetCategory(@ParamId() id: number) {
    return this.service.unset(id, 'category');
  }

  @Add('category')
  addCategory(@ParamId() id: number, @ParamRid() categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Remove('category')
  removeCategory(@ParamId() id: number) {
    return this.service.unset(id, 'category');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
