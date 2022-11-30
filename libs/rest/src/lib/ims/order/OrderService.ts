import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '@ae/models/ims/order/Order';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService extends ResourceService<Order> {
  constructor(@InjectRepository(Order) orderRepo: Repository<Order>) {
    super(orderRepo);
  }
}
