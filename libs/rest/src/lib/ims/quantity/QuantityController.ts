import {
  Add,
  Count,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Quantity } from '@ae/models/ims/quantity/Quantity';
import { QuantityView } from '@ae/models/ims/quantity/QuantityView';
import { QuantityOptionView } from '@ae/models/ims/quantity/QuantityOptionView';
import { CreateQuantityDto } from '@ae/models/ims/quantity/dto/CreateQuantityDto';
import { UpdateQuantityDto } from '@ae/models/ims/quantity/dto/UpdateQuantityDto';

import { Body, Delete, Query } from '@nestjs/common';

import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/quantity', Quantity)
export class QuantityController {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}

  @Read(Quantity)
  findQuantity(
    @Args('query') @Query() query: QueryDto<Quantity & QuantityView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Quantity)
  findByQuantityId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Quantity)
  saveQuantity(@Args('quantity') @Body() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Update()
  updateQuantity(
    @ArgId() @ParamId() id: number,
    @Args('quantity') @Body() body: UpdateQuantityDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteQuantity(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('product')
  setQuantityProduct(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() productId: number
  ) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetQuantityProduct(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Set('store')
  setQuantityStore(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() storeId: number
  ) {
    return this.service.set(id, storeId, 'store');
  }

  @Unset('store')
  unsetQuantityStore(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'store');
  }

  @Count()
  countQuantity() {
    return this.service.count();
  }
}
