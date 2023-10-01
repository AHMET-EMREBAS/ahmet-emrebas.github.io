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
import { Quantity } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuantityDto, QueryQuantityDto, UpdateQuantityDto } from './dto';
import {
  publishQuantityDelete,
  publishQuantitySave,
  publishQuantityUpdate,
} from './quantity.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class QuantityController {
  constructor(
    @InjectRepository(Quantity) private readonly repo: Repository<Quantity>
  ) {}

  @Get('quantitys')
  findQuantitys(@Query(ValidationPipe()) options: QueryQuantityDto) {
    return this.repo.find(options);
  }

  @Get('quantity/:id')
  findQuantityById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('quantity')
  async createQuantity(@Body(ValidationPipe()) body: CreateQuantityDto) {
    const saved = await this.repo.save(body);
    publishQuantitySave(saved);
    return saved;
  }

  @Put('quantity/:id')
  async updateQuantity(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdateQuantityDto
  ) {
    const updated = await this.repo.update(id, body);
    publishQuantityUpdate(updated.raw);
    return updated;
  }

  @Delete('quantity/:id')
  async deleteQuantity(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishQuantityDelete(deleted.raw);
    return deleted;
  }
}
