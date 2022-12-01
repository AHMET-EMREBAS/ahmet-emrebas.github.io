import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CartOptionView } from '@ae/models/pms/cart/CartOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartOptionViewService extends ResourceViewService<CartOptionView> {
  constructor(
    @InjectRepository(CartOptionView)
    messageViewRepo: Repository<CartOptionView>
  ) {
    super(messageViewRepo);
  }
}
