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
import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { CreatePriceDto } from '@ae/models/ims/price/dto/CreatePriceDto';
import { UpdatePriceDto } from '@ae/models/ims/price/dto/UpdatePriceDto';

import { Body, Delete, Query } from '@nestjs/common';

import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/price', Price)
export class PriceController {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}

  @Read(Price)
  findPrice(@Args('query') @Query() query: QueryDto<Price & PriceView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Price)
  findByPriceId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Price)
  savePrice(@Args('price') @Body() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @Update()
  updatePrice(
    @ArgId() @ParamId() id: number,
    @Args('price') @Body() body: UpdatePriceDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePrice(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setPricePricelevel(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() pricelevelId: number
  ) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricePricelevel(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Set('product')
  setPriceProduct(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() productId: number
  ) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetPriceProduct(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Count()
  countPrice() {
    return this.service.count();
  }
}
