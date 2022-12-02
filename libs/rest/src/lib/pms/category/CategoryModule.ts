import { Category } from '@ae/models/pms/category/Category';
import { CategoryView } from '@ae/models/pms/category/CategoryView';
import { CategoryOptionView } from '@ae/models/pms/category/CategoryOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { CategoryOptionViewService } from './CategoryOptionViewService';

import { CategoryController } from './CategoryController';
import { CategoryResolver } from './CategoryResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, CategoryView, CategoryOptionView]),
  ],
  providers: [
    CategoryService,
    CategoryViewService,
    CategoryOptionViewService,
    CategoryResolver,
  ],
  controllers: [CategoryController],
})
export class CategoryModule {}
