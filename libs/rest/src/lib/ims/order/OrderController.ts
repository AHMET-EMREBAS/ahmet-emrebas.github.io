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

import { Order } from '@ae/models/ims/order/Order';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';
import { CreateOrderDto } from '@ae/models/ims/order/dto/CreateOrderDto';
import { UpdateOrderDto } from '@ae/models/ims/order/dto/UpdateOrderDto';
import { QueryOrderDto } from '@ae/models/ims/order/dto/QueryOrderDto';

import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';
import { OrderOptionViewService } from './OrderOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/order')
export class OrderController {
  constructor(
    private readonly service: OrderService,
    private readonly viewService: OrderViewService,
    private readonly optionViewService: OrderOptionViewService
  ) {}

  @Read()
  findOrder(
    @Query() query: QueryDto<Order & OrderView>,
    @Query() where: QueryOrderDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByOrderId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveOrder(@Body() body: CreateOrderDto) {
    return this.service.save(body);
  }

  @Update()
  updateOrder(@ParamId() id: number, @Body() body: UpdateOrderDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteOrder(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('product')
  setOrderProduct(@ParamId() id: number, @ParamRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @Unset('product')
  unsetOrderProduct(@ParamId() id: number) {
    return this.service.unset(id, 'product');
  }

  @Set('cart')
  setOrderCart(@ParamId() id: number, @ParamRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetOrderCart(@ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Set('customer')
  setOrderCustomer(@ParamId() id: number, @ParamRid() customerId: number) {
    return this.service.set(id, customerId, 'customer');
  }

  @Unset('customer')
  unsetOrderCustomer(@ParamId() id: number) {
    return this.service.unset(id, 'customer');
  }

  @Count()
  countOrder() {
    return this.service.count();
  }

  @Options()
  optionsOrder(@Query() query: QueryDto<Order & OrderView>) {
    return this.optionViewService.find(query);
  }
}
