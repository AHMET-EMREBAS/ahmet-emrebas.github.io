import {
  Add,
  Aggregate,
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
} from '@ae/core';

import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { CreatePriceDto } from '@ae/models/ims/price/dto/CreatePriceDto';
import { UpdatePriceDto } from '@ae/models/ims/price/dto/UpdatePriceDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';

@ApiTags('price')
@Controller('price')
export class PriceController {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Price & PriceView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('pricelevel')
  setPricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Set('product')
  setProduct(@ParamId() id: number, @ParamRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetProduct(@ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
