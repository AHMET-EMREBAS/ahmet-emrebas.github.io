import { Category } from '@ae/models/pms/category/Category';

import { Product } from '@ae/models/pms/product/Product';
import { ProductView } from '@ae/models/pms/product/ProductView';
import { ProductOptionView } from '@ae/models/pms/product/ProductOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { ProductController } from './ProductController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductView,
      ProductOptionView,

      Category,
    ]),
  ],
  providers: [ProductService, ProductViewService],
  controllers: [ProductController],
})
export class ProductModule {}
