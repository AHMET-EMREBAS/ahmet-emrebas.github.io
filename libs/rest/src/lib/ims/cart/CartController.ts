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
import { Cart } from '@ae/models/ims/cart/Cart';
import { CartView } from '@ae/models/ims/cart/CartView';
import { CartOptionView } from '@ae/models/ims/cart/CartOptionView';
import { CreateCartDto } from '@ae/models/ims/cart/dto/CreateCartDto';
import { UpdateCartDto } from '@ae/models/ims/cart/dto/UpdateCartDto';

import {
  applyDecorators,
  Body,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { CartService } from './CartService';
import { CartViewService } from './CartViewService';
import { Args } from '@nestjs/graphql';
import { ApiBody } from '@nestjs/swagger';

@Controller('ims/cart', Cart)
export class CartController {
  constructor(
    private readonly service: CartService,
    private readonly viewService: CartViewService
  ) {}

  @Read(Cart)
  findCart(
    @Args('query')
    @Query()
    query: QueryDto<Cart & CartView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Cart)
  findByCartId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Cart)
  saveCart(
    @Body() body: CreateCartDto,
    @Args('cart', { nullable: true }) args: CreateCartDto
  ) {
    return this.service.save(body);
  }

  @Update()
  updateCart(
    @ArgId() @ParamId() id: number,
    @Args('cart') @Body() body: UpdateCartDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCart(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countCart() {
    return this.service.count();
  }
}
