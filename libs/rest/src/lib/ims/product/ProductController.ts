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
} from '@ae/core';

import { Product } from '@ae/models/ims/product/Product';
import { ProductView } from '@ae/models/ims/product/ProductView';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';
import { CreateProductDto } from '@ae/models/ims/product/dto/CreateProductDto';
import { UpdateProductDto } from '@ae/models/ims/product/dto/UpdateProductDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';

@ApiTags('ims | Product')
@Controller('ims/product')
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

  @Count()
  count() {
    return this.service.count();
  }
}
