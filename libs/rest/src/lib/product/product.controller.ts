import { ICategory, IProduct } from '@ae/common';
import { Product } from '@ae/models';
import { Controller, Get, Inject, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const RESOURCE_PATH = 'product';

@Controller()
export class ProductController {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Get(RESOURCE_PATH)
  readProduct(): Promise<IProduct<ICategory, any, any>> {
    return [{ id: 1 }, { id: 2 }];
  }

  @Post(RESOURCE_PATH)
  createProduct() {
    return { id: 1 };
  }
}
