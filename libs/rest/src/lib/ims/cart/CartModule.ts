import { Cart, CartView } from '@ae/models/ims/cart';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './CartService';
import { CartViewService } from './CartViewService';
import { CartController } from './CartController';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartView])],
  providers: [CartService, CartViewService],
  controllers: [CartController],
})
export class CartModule {}
