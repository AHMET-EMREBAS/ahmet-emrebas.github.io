import { ResourceService } from '@ae/core/rest';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService extends ResourceService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo);
  }
}
