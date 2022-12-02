import { Product } from '@ae/models/ims/product/Product';

import { Cart } from '@ae/models/ims/cart/Cart';

import { Customer } from '@ae/models/ims/customer/Customer';

import { Order } from '@ae/models/ims/order/Order';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';
import { OrderOptionViewService } from './OrderOptionViewService';

import { OrderController } from './OrderController';
import { OrderResolver } from './OrderResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderView,
      OrderOptionView,

      Product,

      Cart,

      Customer,
    ]),
  ],
  providers: [
    OrderService,
    OrderViewService,
    OrderOptionViewService,
    OrderResolver,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
