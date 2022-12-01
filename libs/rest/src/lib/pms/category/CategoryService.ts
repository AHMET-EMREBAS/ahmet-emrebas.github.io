import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '@ae/models/pms/category/Category';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService extends ResourceService<Category> {
  constructor(@InjectRepository(Category) categoryRepo: Repository<Category>) {
    super(categoryRepo);
  }
}
