import { Module } from '@nestjs/common';
import { Category, CategoryView } from '@ae/models/inventory/category';
import { CategoryController } from './category.controller';
import { CategoryViewController } from './category-view.controller';
import { CategoryService } from './category.service';
import { CategoryViewService } from './category-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController, CategoryViewController],
  providers: [CategoryService, CategoryViewService],
})
export class CategoryModule {}
