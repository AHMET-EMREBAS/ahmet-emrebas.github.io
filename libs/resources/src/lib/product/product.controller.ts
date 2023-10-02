import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateProductDto, Product, UpdateProductDto } from '@techbir/entities';
import { ProductService, ProductPubSub } from './product.service';

@Controller()
export class ProductController extends createController({
  createDto: CreateProductDto,
  entity: Product,
  pubSub: ProductPubSub,
  queryDto: QueryDto,
  updateDto: UpdateProductDto,
}) {
  constructor(service: ProductService) {
    super(service);
  }
}
