import { Product } from '@ae/models/ims/product';

import { Cart } from '@ae/models/ims/cart';

import { Customer } from '@ae/models/ims/customer';

import { Order, OrderView } from '@ae/models/ims/order';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './OrderService';
import { OrderViewService } from './OrderViewService';
import { OrderController } from './OrderController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderView, Product, Cart, Customer]),
  ],
  providers: [OrderService, OrderViewService],
  controllers: [OrderController],
})
export class OrderModule {}
