import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderView } from '@ae/models/ims/order/OrderView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderViewService extends ResourceViewService<OrderView> {
  constructor(
    @InjectRepository(OrderView) orderViewRepo: Repository<OrderView>
  ) {
    super(orderViewRepo);
  }
}
