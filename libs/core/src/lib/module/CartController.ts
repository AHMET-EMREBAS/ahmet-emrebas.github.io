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

import { Cart } from '@ae/models/ims/cart/Cart';
import { CartView } from '@ae/models/ims/cart/CartView';
import { CartOptionView } from '@ae/models/ims/cart/CartOptionView';
import { CreateCartDto } from '@ae/models/ims/cart/dto/CreateCartDto';
import { UpdateCartDto } from '@ae/models/ims/cart/dto/UpdateCartDto';
import { QueryCartDto } from '@ae/models/ims/cart/dto/QueryCartDto';

import { CartService } from './CartService';

@Controller('ims/cart')
export class CartController {
  constructor(private readonly service: CartService) {}

  @Read()
  findCart(
    @Query() query: QueryDto<Cart & CartView>,
    @Query() where: QueryCartDto
  ) {
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByCartId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveCart(@Body() body: CreateCartDto) {
    return this.service.save(body);
  }

  @Update()
  updateCart(@ParamId() id: number, @Body() body: UpdateCartDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCart(@ParamId() id: number) {
    return this.service.delete(id);
  }
}
