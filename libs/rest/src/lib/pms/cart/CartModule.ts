import { Cart } from '@ae/models/pms/cart/Cart';
import { CartView } from '@ae/models/pms/cart/CartView';
import { CartOptionView } from '@ae/models/pms/cart/CartOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './CartService';
import { CartViewService } from './CartViewService';
import { CartController } from './CartController';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartView, CartOptionView])],
  providers: [CartService, CartViewService],
  controllers: [CartController],
})
export class CartModule {}
