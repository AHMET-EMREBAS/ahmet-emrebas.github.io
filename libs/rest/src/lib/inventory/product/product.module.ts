import { Module, OnModuleInit } from '@nestjs/common';
import { Product, ProductView } from '@ae/models/inventory/product';
import { ProductController } from './product.controller';
import { ProductViewController } from './product-view.controller';
import { ProductService } from './product.service';
import { ProductViewService } from './product-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from '@ae/models/inventory/category';
import { Department } from '@ae/models/inventory/department';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductView, Category, Department]),
  ],
  controllers: [ProductController, ProductViewController],
  providers: [ProductService, ProductViewService],
})
export class ProductModule implements OnModuleInit {
  constructor(private readonly service: ProductService) {}
  onModuleInit() {
    // Seed database
  }
}
