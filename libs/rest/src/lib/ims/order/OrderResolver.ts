import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Order } from '@ae/models/ims/order/Order';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';
import { CreateOrderDto } from '@ae/models/ims/order/dto/CreateOrderDto';
import { UpdateOrderDto } from '@ae/models/ims/order/dto/UpdateOrderDto';

import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';
import { OrderOptionViewService } from './OrderOptionViewService';

@Resolver(Order)
export class OrderResolver {
  constructor(
    private readonly service: OrderService,
    private readonly viewService: OrderViewService,
    private readonly optionViewService: OrderOptionViewService
  ) {}

  @GRead(Order)
  findOrder(@Args('query') query: QueryDto<Order & OrderView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Order)
  findByOrderId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Order)
  saveOrder(@Args('order') body: CreateOrderDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateOrder(@ArgId() id: number, @Args('order') body: UpdateOrderDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteOrder(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('product')
  setOrderProduct(@ArgId() id: number, @ArgRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @GUnset('product')
  unsetOrderProduct(@ArgId() id: number) {
    return this.service.unset(id, 'product');
  }

  @GSet('cart')
  setOrderCart(@ArgId() id: number, @ArgRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @GUnset('cart')
  unsetOrderCart(@ArgId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @GSet('customer')
  setOrderCustomer(@ArgId() id: number, @ArgRid() customerId: number) {
    return this.service.set(id, customerId, 'customer');
  }

  @GUnset('customer')
  unsetOrderCustomer(@ArgId() id: number) {
    return this.service.unset(id, 'customer');
  }

  @GCount()
  countOrder() {
    return this.service.count();
  }

  @GOptions()
  optionsOrder(@Args('query') query: QueryDto<Order & OrderView>) {
    return this.optionViewService.find(query);
  }
}
