import { Controller, Get, Inject, Post } from '@nestjs/common';

@Controller()
export class ProductController {
  constructor() {}

  @Get('product')
  readProduct() {
    return [];
  }

  @Post('product')
  createProduct() {
    return {};
  }
}
