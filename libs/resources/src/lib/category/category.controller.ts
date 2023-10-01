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
import { Category } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto, QueryCategoryDto, UpdateCategoryDto } from './dto';
import {
  publishCategoryDelete,
  publishCategorySave,
  publishCategoryUpdate,
} from './category.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class CategoryController {
  constructor(
    @InjectRepository(Category) private readonly repo: Repository<Category>
  ) {}

  @Get('categorys')
  findCategorys(@Query(ValidationPipe()) options: QueryCategoryDto) {
    return this.repo.find(options);
  }

  @Get('category/:id')
  findCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('category')
  async createCategory(@Body(ValidationPipe()) body: CreateCategoryDto) {
    const saved = await this.repo.save(body);
    publishCategorySave(saved);
    return saved;
  }

  @Put('category/:id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdateCategoryDto
  ) {
    const updated = await this.repo.update(id, body);
    publishCategoryUpdate(updated.raw);
    return updated;
  }

  @Delete('category/:id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishCategoryDelete(deleted.raw);
    return deleted;
  }
}
