import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassConstructor } from '../types';

export interface RestControllerOptions {
  appname: string;
  entity: ClassConstructor<unknown>;
}

export function RestControllerFactory(options: RestControllerOptions) {
  const APP_NAME = options.appname;
  const ENTITY_NAME = options.entity.name.toLowerCase();
  const BASE_PATH = [APP_NAME, ENTITY_NAME].join('/');

  const commonOptions: ValidationPipeOptions = {
    expectedType: options.entity,
    transform: true,
    transformOptions: {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    },
    stopAtFirstError: true,
  };

  const CreateValidationPipe = new ValidationPipe(commonOptions);

  const UpdateValidationPipe = new ValidationPipe({
    ...commonOptions,
    skipMissingProperties: true,
    skipNullProperties: true,
    skipUndefinedProperties: true,
  });

  @ApiTags(APP_NAME + ' | ' + ENTITY_NAME)
  @Controller(BASE_PATH)
  class RestController {
    constructor(
      @InjectRepository(options.entity, APP_NAME)
      public readonly repo: Repository<unknown>
    ) {}

    @ApiBody({ type: options.entity })
    @Post()
    create(@Body(CreateValidationPipe) item: Record<string, unknown>) {
      return this.repo.save(item);
    }

    @Get()
    findAll() {
      return this.repo.find();
    }

    @Get(':id')
    findOnById(@Param('id') id: number) {
      return this.repo.findOneBy({ id });
    }

    @ApiBody({ type: options.entity })
    @Put(':id')
    update(
      @Param('id') id: number,
      @Body(UpdateValidationPipe) updated: Record<string, unknown>
    ) {
      return this.repo.update(id, updated);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
      return this.repo.delete(id);
    }
  }

  return RestController;
}
