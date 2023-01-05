import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Category, CreateCategoryDto } from '@ae/models/inventory/category';

@Injectable()
export class CategoryService extends ResourceService<CreateCategoryDto> {
  constructor(
    @InjectRepository(Category) __repo: Repository<CreateCategoryDto>
  ) {
    super(__repo);
  }
}
