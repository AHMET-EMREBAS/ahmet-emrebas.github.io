import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '@ae/models/pms/cart/Cart';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService extends ResourceService<Cart> {
  constructor(@InjectRepository(Cart) cartRepo: Repository<Cart>) {
    super(cartRepo);
  }
}
