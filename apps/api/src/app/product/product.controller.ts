import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto, QueryProductDto, UpdateProductDto } from './dto';
import {
  publishProductDelete,
  publishProductSave,
  publishProductUpdate,
} from './product.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class ProductController {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>
  ) {}

  @Get('products')
  findProducts(@Query(ValidationPipe()) options: QueryProductDto) {
    return this.repo.find(options);
  }

  @Get('product/:id')
  findProductById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('product')
  async createProduct(@Body(ValidationPipe()) body: CreateProductDto) {
    const saved = await this.repo.save(body);
    publishProductSave(saved);
    return saved;
  }

  @Put('product/:id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdateProductDto
  ) {
    const updated = await this.repo.update(id, body);
    publishProductUpdate(updated.raw);
    return updated;
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishProductDelete(deleted.raw);
    return deleted;
  }
}
