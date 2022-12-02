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

import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { CreatePriceDto } from '@ae/models/ims/price/dto/CreatePriceDto';
import { UpdatePriceDto } from '@ae/models/ims/price/dto/UpdatePriceDto';
import { QueryPriceDto } from '@ae/models/ims/price/dto/QueryPriceDto';

import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';
import { PriceOptionViewService } from './PriceOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/price')
export class PriceController {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService,
    private readonly optionViewService: PriceOptionViewService
  ) {}

  @Read()
  findPrice(
    @Query() query: QueryDto<Price & PriceView>,
    @Query() where: QueryPriceDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByPriceId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  savePrice(@Body() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @Update()
  updatePrice(@ParamId() id: number, @Body() body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deletePrice(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setPricePricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricePricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Set('product')
  setPriceProduct(@ParamId() id: number, @ParamRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetPriceProduct(@ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Count()
  countPrice() {
    return this.service.count();
  }

  @Options()
  optionsPrice(@Query() query: QueryDto<Price & PriceView>) {
    return this.optionViewService.find(query);
  }
}
