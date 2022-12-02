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

import { Product } from '@ae/models/ims/product/Product';
import { ProductView } from '@ae/models/ims/product/ProductView';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';
import { CreateProductDto } from '@ae/models/ims/product/dto/CreateProductDto';
import { UpdateProductDto } from '@ae/models/ims/product/dto/UpdateProductDto';
import { QueryProductDto } from '@ae/models/ims/product/dto/QueryProductDto';

import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { ProductOptionViewService } from './ProductOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/product')
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService,
    private readonly optionViewService: ProductOptionViewService
  ) {}

  @Read()
  findProduct(
    @Query() query: QueryDto<Product & ProductView>,
    @Query() where: QueryProductDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByProductId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveProduct(@Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @Update()
  updateProduct(@ParamId() id: number, @Body() body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteProduct(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('category')
  setProductCategory(@ParamId() id: number, @ParamRid() categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Unset('category')
  unsetProductCategory(@ParamId() id: number) {
    return this.service.unset(id, 'category');
  }

  @Count()
  countProduct() {
    return this.service.count();
  }

  @Options()
  optionsProduct(@Query() query: QueryDto<Product & ProductView>) {
    return this.optionViewService.find(query);
  }
}
