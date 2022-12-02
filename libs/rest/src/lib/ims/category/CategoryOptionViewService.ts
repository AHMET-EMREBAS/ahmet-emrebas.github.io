import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryOptionView } from '@ae/models/ims/category/CategoryOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryOptionViewService extends ResourceViewService<CategoryOptionView> {
  constructor(
    @InjectRepository(CategoryOptionView)
    categoryViewRepo: Repository<CategoryOptionView>
  ) {
    super(categoryViewRepo);
  }
}
