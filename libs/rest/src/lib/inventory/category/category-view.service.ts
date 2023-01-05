import { ResourceService } from '@ae/core/rest';
import { CategoryView } from '@ae/models/inventory/category';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryViewService extends ResourceService<CategoryView> {
  constructor(
    @InjectRepository(CategoryView) __repo: Repository<CategoryView>
  ) {
    super(__repo);
  }
}
