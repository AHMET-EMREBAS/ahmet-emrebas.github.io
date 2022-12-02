import { Cart } from '@ae/models/ims/cart/Cart';
import { CartView } from '@ae/models/ims/cart/CartView';
import { CartOptionView } from '@ae/models/ims/cart/CartOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './CartService';
import { CartViewService } from './CartViewService';
import { CartOptionViewService } from './CartOptionViewService';

import { CartController } from './CartController';
import { CartResolver } from './CartResolver';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartView, CartOptionView])],
  providers: [
    CartService,
    CartViewService,
    CartOptionViewService,
    CartResolver,
  ],
  controllers: [CartController],
})
export class CartModule {}
