import { Category } from '@ae/models/pms/category/Category';
import { CategoryView } from '@ae/models/pms/category/CategoryView';
import { CategoryOptionView } from '@ae/models/pms/category/CategoryOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { CategoryController } from './CategoryController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, CategoryView, CategoryOptionView]),
  ],
  providers: [CategoryService, CategoryViewService, CategoryController],
  controllers: [CategoryController],
})
export class CategoryModule {}
