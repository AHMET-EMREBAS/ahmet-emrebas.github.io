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

import { Order } from '@ae/models/ims/order/Order';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';
import { CreateOrderDto } from '@ae/models/ims/order/dto/CreateOrderDto';
import { UpdateOrderDto } from '@ae/models/ims/order/dto/UpdateOrderDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(
    private readonly service: OrderService,
    private readonly viewService: OrderViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Order & OrderView>) {
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
  save(@Body() body: CreateOrderDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateOrderDto) {
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

  @Set('cart')
  setCart(@ParamId() id: number, @ParamRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetCart(@ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Set('customer')
  setCustomer(@ParamId() id: number, @ParamRid() customerId: number) {
    return this.service.set(id, customerId, 'customer');
  }

  @Unset('customer')
  unsetCustomer(@ParamId() id: number) {
    return this.service.unset(id, 'customer');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
