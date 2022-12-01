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
import { Order } from '@ae/models/ims/order/Order';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';
import { CreateOrderDto } from '@ae/models/ims/order/dto/CreateOrderDto';
import { UpdateOrderDto } from '@ae/models/ims/order/dto/UpdateOrderDto';

import { Body, Delete, Query } from '@nestjs/common';

import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/order', Order)
export class OrderController {
  constructor(
    private readonly service: OrderService,
    private readonly viewService: OrderViewService
  ) {}

  @Read(Order)
  findOrder(@Args('query') @Query() query: QueryDto<Order & OrderView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Order)
  findByOrderId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Order)
  saveOrder(@Args('order') @Body() body: CreateOrderDto) {
    return this.service.save(body);
  }

  @Update()
  updateOrder(
    @ArgId() @ParamId() id: number,
    @Args('order') @Body() body: UpdateOrderDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteOrder(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('product')
  setOrderProduct(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() productId: number
  ) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetOrderProduct(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Set('cart')
  setOrderCart(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() cartId: number
  ) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetOrderCart(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Set('customer')
  setOrderCustomer(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() customerId: number
  ) {
    return this.service.set(id, customerId, 'customer');
  }

  @Unset('customer')
  unsetOrderCustomer(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'customer');
  }

  @Count()
  countOrder() {
    return this.service.count();
  }
}
