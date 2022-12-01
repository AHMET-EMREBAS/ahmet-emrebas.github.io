import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CartView } from '@ae/models/pms/cart/CartView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartViewService extends ResourceViewService<CartView> {
  constructor(@InjectRepository(CartView) cartViewRepo: Repository<CartView>) {
    super(cartViewRepo);
  }
}
