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
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RemoveRelationDto } from '../dto/remove-relation.dto';
import { AddRelationDto } from '../dto/add-relation.dto';
export interface BasicControllerOptions {
  entity: EntityConstructor;
}

export function ResourceControllerFactory(options: BasicControllerOptions) {
  type TypeOfEntity = typeof options.entity;

  @ApiTags(options.entity.name)
  @Controller(options.entity.name.toLowerCase().replace('entity', ''))
  class BasicController {
    constructor(
      @InjectRepository(options.entity)
      public readonly __repo: Repository<any>
    ) {}

    @ApiBody({ type: options.entity })
    @Post()
    save(
      @Body(CreateValidationPipe(options.entity))
      body: {
        id: number;
      }
    ) {
      return this.__repo.save({ ...body });
    }

    @Get()
    findAll(@Query() orderDto: OrderDto, @Query() paginator: PaginatorDto) {
      return this.__repo.find({
        ...paginator,
        order: { [orderDto.orderProperty]: orderDto.orderDirection },
      });
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
      return this.__repo.findOneBy({ id });
    }

    @Put('id')
    @ApiBody({ type: PartialType(options.entity) })
    update(
      @Param('id') id: number,
      @Body(UpdateValidationPipe(options.entity))
      updated: TypeOfEntity
    ) {
      return this.__repo.update(id, updated);
    }

    @Delete('id')
    delete(@Param('id') id: number) {
      return this.__repo.delete(id);
    }

    @Post(':id/:rname/:rid')
    setRelation(@Param() setRelationDto: SetRelationDto) {
      return this.set(setRelationDto);
    }

    @Delete(':id/:rname')
    unsetRelation(@Param() urd: UnsetRelationDto) {
      return this.unset(urd);
    }

    @Patch(':id/:rname/:rid')
    addRelation(@Param() setRelationDto: SetRelationDto) {
      return this.add(setRelationDto);
    }

    @Delete(':id/:rname/:rid')
    removeRelation(@Param() urd: RemoveRelationDto) {
      return this.unset(urd);
    }

    /**
     * Add many to  many relation ship
     * @param id
     * @param relationId
     * @param relationName
     * @returns
     */
    add(ard: AddRelationDto) {
      return this.__repo
        .createQueryBuilder()
        .relation(ard.rname)
        .of(ard.id)
        .add(ard.rid);
    }

    /**
     * Add many to one relationship
     * @param id
     * @param relationId
     * @param relationName
     * @returns
     */
    set(srd: SetRelationDto) {
      return this.__repo
        .createQueryBuilder()
        .relation(srd.rname)
        .of(srd.id)
        .set(srd.rid);
    }

    /**
     * Remove many to one relationship
     * @param id
     * @param relationName
     * @returns
     */
    unset(usd: UnsetRelationDto) {
      return this.__repo
        .createQueryBuilder()
        .relation(usd.rname)
        .of(usd.id)
        .set(null);
    }

    /**
     * Remove many to many relationship
     * @param id
     * @param relationId
     * @param relationName
     * @returns
     */
    remove(rrd: RemoveRelationDto) {
      return this.__repo
        .createQueryBuilder()
        .relation(rrd.rname)
        .of(rrd.id)
        .remove(rrd.rid);
    }
  }

  return BasicController;
}
