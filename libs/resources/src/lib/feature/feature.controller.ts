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
import { Feature } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeatureDto, QueryFeatureDto, UpdateFeatureDto } from './dto';
import {
  publishFeatureDelete,
  publishFeatureSave,
  publishFeatureUpdate,
} from './feature.pub';
import { ValidationPipe } from '@techbir/core';

@Controller()
export class FeatureController {
  constructor(
    @InjectRepository(Feature) private readonly repo: Repository<Feature>
  ) {}

  @Get('features')
  findFeatures(@Query(ValidationPipe()) options: QueryFeatureDto) {
    return this.repo.find(options);
  }

  @Get('feature/:id')
  findFeatureById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post('feature')
  async createFeature(@Body(ValidationPipe()) body: CreateFeatureDto) {
    const saved = await this.repo.save(body);
    publishFeatureSave(saved);
    return saved;
  }

  @Put('feature/:id')
  async updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe()) body: UpdateFeatureDto
  ) {
    const updated = await this.repo.update(id, body);
    publishFeatureUpdate(updated.raw);
    return updated;
  }

  @Delete('feature/:id')
  async deleteFeature(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.repo.delete(id);
    publishFeatureDelete(deleted.raw);
    return deleted;
  }
}
