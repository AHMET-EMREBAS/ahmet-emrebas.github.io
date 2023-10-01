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
import { Store } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStoreDto, QueryStoreDto, UpdateStoreDto } from './dto';
import {
  publishStoreDelete,
  publishStoreSave,
  publishStoreUpdate,
} from './store.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class StoreController {
  constructor(
    @InjectRepository(Store) private readonly repo: Repository<Store>
  ) {}

  @Get('stores')
  findStores(@Query(ValidationPipe()) options: QueryStoreDto) {
    return this.repo.find(options);
  }

  @Get('store/:id')
  findStoreById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('store')
  async createStore(@Body(ValidationPipe()) body: CreateStoreDto) {
    const saved = await this.repo.save(body);
    publishStoreSave(saved);
    return saved;
  }

  @Put('store/:id')
  async updateStore(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdateStoreDto
  ) {
    const updated = await this.repo.update(id, body);
    publishStoreUpdate(updated.raw);
    return updated;
  }

  @Delete('store/:id')
  async deleteStore(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishStoreDelete(deleted.raw);
    return deleted;
  }
}
