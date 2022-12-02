import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { Quantity } from '@ae/models/ims/quantity/Quantity';
import { QuantityView } from '@ae/models/ims/quantity/QuantityView';
import { QuantityOptionView } from '@ae/models/ims/quantity/QuantityOptionView';
import { CreateQuantityDto } from '@ae/models/ims/quantity/dto/CreateQuantityDto';
import { UpdateQuantityDto } from '@ae/models/ims/quantity/dto/UpdateQuantityDto';
import { QueryQuantityDto } from '@ae/models/ims/quantity/dto/QueryQuantityDto';

import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';
import { QuantityOptionViewService } from './QuantityOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/quantity')
export class QuantityController {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService,
    private readonly optionViewService: QuantityOptionViewService
  ) {}

  @Read()
  findQuantity(
    @Query() query: QueryDto<Quantity & QuantityView>,
    @Query() where: QueryQuantityDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByQuantityId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveQuantity(@Body() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Update()
  updateQuantity(@ParamId() id: number, @Body() body: UpdateQuantityDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteQuantity(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('product')
  setQuantityProduct(@ParamId() id: number, @ParamRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetQuantityProduct(@ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Set('store')
  setQuantityStore(@ParamId() id: number, @ParamRid() storeId: number) {
    return this.service.set(id, storeId, 'store');
  }

  @Unset('store')
  unsetQuantityStore(@ParamId() id: number) {
    return this.service.unset(id, 'store');
  }

  @Count()
  countQuantity() {
    return this.service.count();
  }

  @Options()
  optionsQuantity(@Query() query: QueryDto<Quantity & QuantityView>) {
    return this.optionViewService.find(query);
  }
}
