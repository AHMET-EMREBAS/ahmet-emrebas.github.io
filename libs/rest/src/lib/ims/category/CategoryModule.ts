import { Category, CategoryView } from '@ae/models/ims/category';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './CategoryService';
import { CategoryViewService } from './CategoryViewService';
import { CategoryController } from './CategoryController';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  providers: [CategoryService, CategoryViewService],
  controllers: [CategoryController],
})
export class CategoryModule {}
