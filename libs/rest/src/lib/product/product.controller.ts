import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';

const RESOURCE_PATH = 'product';

@Controller()
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get(RESOURCE_PATH)
  readProduct(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Post(RESOURCE_PATH)
  createProduct(@Body() body: any) {
    return this.service.save(body);
  }
}
