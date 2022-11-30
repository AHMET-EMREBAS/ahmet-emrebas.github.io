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

import { Cart } from '@ae/models/ims/cart/Cart';
import { CartView } from '@ae/models/ims/cart/CartView';
import { CartOptionView } from '@ae/models/ims/cart/CartOptionView';
import { CreateCartDto } from '@ae/models/ims/cart/dto/CreateCartDto';
import { UpdateCartDto } from '@ae/models/ims/cart/dto/UpdateCartDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './CartService';
import { CartViewService } from './CartViewService';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly service: CartService,
    private readonly viewService: CartViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Cart & CartView>) {
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
  save(@Body() body: CreateCartDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateCartDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
