import { Controller, Get, Inject, Post } from '@nestjs/common';

const RESOURCE_PATH = 'category';

@Controller()
export class CategoryController {
  constructor() {}

  @Get(RESOURCE_PATH)
  readProduct() {
    return [{ id: 1 }, { id: 2 }];
  }

  @Post(RESOURCE_PATH)
  createProduct() {
    return { id: 1 };
  }
}
