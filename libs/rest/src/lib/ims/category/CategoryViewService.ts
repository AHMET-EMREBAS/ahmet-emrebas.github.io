import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryView } from '@ae/models/ims/category/CategoryView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryViewService extends ResourceViewService<CategoryView> {
  constructor(
    @InjectRepository(CategoryView) categoryViewRepo: Repository<CategoryView>
  ) {
    super(categoryViewRepo);
  }
}
