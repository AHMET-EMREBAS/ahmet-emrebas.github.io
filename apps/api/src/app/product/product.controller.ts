import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { Product } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto';

@Controller()
export class ProductController {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Get('products')
  products(@Query() options: FindManyOptions) {
    return this.repo.find(options);
  }

  @Post('product')
  createProduct(@Body() body: CreateProductDto) {
    return this.repo.save(body);
  }
}
