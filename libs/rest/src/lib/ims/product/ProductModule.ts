import { Category } from '@ae/models/ims/category';

import { Product, ProductView } from '@ae/models/ims/product';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { ProductController } from './ProductController';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductView, Category])],
  providers: [ProductService, ProductViewService],
  controllers: [ProductController],
})
export class ProductModule {}
