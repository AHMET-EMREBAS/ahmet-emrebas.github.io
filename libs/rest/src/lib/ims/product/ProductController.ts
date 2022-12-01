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
import { Product } from '@ae/models/ims/product/Product';
import { ProductView } from '@ae/models/ims/product/ProductView';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';
import { CreateProductDto } from '@ae/models/ims/product/dto/CreateProductDto';
import { UpdateProductDto } from '@ae/models/ims/product/dto/UpdateProductDto';

import { Body, Delete, Query } from '@nestjs/common';

import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/product', Product)
export class ProductController {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}

  @Read(Product)
  findProduct(@Args('query') @Query() query: QueryDto<Product & ProductView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Product)
  findByProductId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Product)
  saveProduct(@Args('product') @Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @Update()
  updateProduct(
    @ArgId() @ParamId() id: number,
    @Args('product') @Body() body: UpdateProductDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteProduct(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('category')
  setProductCategory(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() categoryId: number
  ) {
    return this.service.set(id, categoryId, 'category');
  }

  @Unset('category')
  unsetProductCategory(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'category');
  }

  @Count()
  countProduct() {
    return this.service.count();
  }
}
