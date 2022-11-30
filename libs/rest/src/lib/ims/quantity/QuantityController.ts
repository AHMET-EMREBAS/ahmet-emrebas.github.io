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
import {
  Quantity,
  QuantityView,
  CreateQuantityDto,
  UpdateQuantityDto,
} from '@ae/models/ims/quantity';
import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';

@ApiTags('quantity')
@Controller('quantity')
export class QuantityController {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Quantity & QuantityView>) {
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
  save(@Body() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateQuantityDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('product')
  setProduct(@ParamId() id: number, @ParamRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetProduct(@ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Set('store')
  setStore(@ParamId() id: number, @ParamRid() storeId: number) {
    return this.service.set(id, storeId, 'store');
  }

  @Unset('store')
  unsetStore(@ParamId() id: number) {
    return this.service.unset(id, 'store');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
