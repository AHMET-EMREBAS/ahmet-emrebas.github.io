import { Controller, Get, Inject, Post, Body } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '@ae/models';

const RESOURCE_PATH = 'category';

@Controller()
export class CategoryController {
  constructor(
    @InjectRepository(Category) private readonly repo: Repository<Category>
  ) {}

  @Get(RESOURCE_PATH)
  readProduct() {
    return this.repo.find();
  }

  @Post(RESOURCE_PATH)
  createProduct(@Body() body: any) {
    return this.repo.save(body);
  }
}
