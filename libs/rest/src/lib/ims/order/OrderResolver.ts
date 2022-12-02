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
  GWriteMany,
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
import { ReadOrderDto } from '@ae/models/ims/order/dto/ReadOrderDto';

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

  @GRead(ReadOrderDto)
  findOrders(@Args('query', { nullable: true }) query: QueryDto<Order>) {
    return this.service.find(query);
  }

  @GRead(OrderView)
  viewOrders(@Args('query', { nullable: true }) query: QueryDto<OrderView>) {
    return this.viewService.find(query);
  }

  @GReadById(ReadOrderDto)
  findByOrderId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(OrderView)
  viewByOrderId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadOrderDto)
  saveOrder(@Args('order') body: CreateOrderDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadOrderDto)
  saveOrders(
    @Args('orders', { type: () => [CreateOrderDto] })
    body: CreateOrderDto[]
  ) {
    return this.service.saveMany(body);
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
  optionsOrder(@Args('query') query: QueryDto<OrderOptionView>) {
    return this.optionViewService.find(query);
  }
}
