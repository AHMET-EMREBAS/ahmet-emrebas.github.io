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
import { Price } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePriceDto, QueryPriceDto, UpdatePriceDto } from './dto';
import {
  publishPriceDelete,
  publishPriceSave,
  publishPriceUpdate,
} from './price.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class PriceController {
  constructor(
    @InjectRepository(Price) private readonly repo: Repository<Price>
  ) {}

  @Get('prices')
  findPrices(@Query(ValidationPipe()) options: QueryPriceDto) {
    return this.repo.find(options);
  }

  @Get('price/:id')
  findPriceById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('price')
  async createPrice(@Body(ValidationPipe()) body: CreatePriceDto) {
    const saved = await this.repo.save(body);
    publishPriceSave(saved);
    return saved;
  }

  @Put('price/:id')
  async updatePrice(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdatePriceDto
  ) {
    const updated = await this.repo.update(id, body);
    publishPriceUpdate(updated.raw);
    return updated;
  }

  @Delete('price/:id')
  async deletePrice(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishPriceDelete(deleted.raw);
    return deleted;
  }
}
