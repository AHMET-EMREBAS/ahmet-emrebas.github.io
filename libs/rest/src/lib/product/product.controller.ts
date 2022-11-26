import { Controller, Get, Inject, Post, Body } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '@ae/models';

const RESOURCE_PATH = 'product';

@Controller()
export class ProductController {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
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
