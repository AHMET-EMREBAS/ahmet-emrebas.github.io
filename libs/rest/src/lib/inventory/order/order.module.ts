import { Module } from '@nestjs/common';
import { Order, OrderView } from '@ae/models/inventory/order';
import { OrderController } from './order.controller';
import { OrderViewController } from './order-view.controller';
import { OrderService } from './order.service';
import { OrderViewService } from './order-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Store } from '@ae/models/inventory/store';
import { Product } from '@ae/models/inventory/product';
import { Customer } from '@ae/models/inventory/customer';
import { Employee } from '@ae/models/inventory/employee';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderView,
      Store,
      Product,
      Customer,
      Employee,
    ]),
  ],
  controllers: [OrderController, OrderViewController],
  providers: [OrderService, OrderViewService],
})
export class OrderModule {}
