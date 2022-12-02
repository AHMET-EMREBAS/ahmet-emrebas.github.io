import { Category } from '@ae/models/ims/category/Category';

import { Product } from '@ae/models/ims/product/Product';
import { ProductView } from '@ae/models/ims/product/ProductView';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { ProductOptionViewService } from './ProductOptionViewService';

import { ProductController } from './ProductController';
import { ProductResolver } from './ProductResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductView,
      ProductOptionView,

      Category,
    ]),
  ],
  providers: [
    ProductService,
    ProductViewService,
    ProductOptionViewService,
    ProductResolver,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
