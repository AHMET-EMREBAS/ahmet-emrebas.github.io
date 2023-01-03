import { EntityConstructor } from '../shared';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiTags, PartialType } from '@nestjs/swagger';
import {
  CreateValidationPipe,
  UpdateValidationPipe,
} from '../property/property.decorator';
import { OrderDto } from '../dto/order.dto';
import { PaginatorDto } from '../dto/paginator.dto';
import { ResourceService } from './resource.service';
import { SetRelationDto } from '../dto/set-relation.dto';
import { UnsetRelationDto } from '../dto/unset-relation.dto';

export interface BasicControllerOptions {
  entity: EntityConstructor;
}

export function ResourceControllerFactory(options: BasicControllerOptions) {
  type TypeOfEntity = typeof options.entity;

  class BasicController {
    constructor(public readonly __service: ResourceService<any>) {}

    @ApiBody({ type: options.entity })
    @Post()
    save(
      @Body(CreateValidationPipe(options.entity))
      body: {
        id: number;
      }
    ) {
      console.log('Body', body);
      return this.__service.save({ ...body });
    }

    @Get()
    findAll(@Query() orderDto: OrderDto, @Query() paginator: PaginatorDto) {
      console.log('Order: ', orderDto);
      console.log('Paginator: ', paginator);
      return this.__service.find();
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
      return this.__service.findOneBy({ id });
    }

    @Put('id')
    @ApiBody({ type: PartialType(options.entity) })
    update(
      @Param('id') id: number,
      @Body(UpdateValidationPipe(options.entity))
      updated: TypeOfEntity
    ) {
      return this.__service.update(id, updated);
    }

    @Delete('id')
    delete(@Param('id') id: number) {
      return this.__service.delete(id);
    }

    @Post(':id/:rname/:rid')
    setRelation(@Param() setRelationDto: SetRelationDto) {
      return this.__service.set(setRelationDto);
    }

    @Delete(':id/:rname')
    unsetRelation(@Param() urd: UnsetRelationDto) {
      console.log(urd);
      return this.__service.unset(urd);
    }

    @Patch(':id/:rname/:rid')
    addRelation(@Param() setRelationDto: SetRelationDto) {
      return this.__service.set(setRelationDto);
    }

    @Delete(':id/:rname/:rid')
    removeRelation(@Param() urd: UnsetRelationDto) {
      console.log(urd);
      return this.__service.unset(urd);
    }
  }

  return BasicController;
}
