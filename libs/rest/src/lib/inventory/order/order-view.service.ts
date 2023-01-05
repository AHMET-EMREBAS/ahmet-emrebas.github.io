import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { OrderView } from '@ae/models/inventory/order';

@Injectable()
export class OrderViewService extends ResourceService<OrderView> {
  constructor(@InjectRepository(OrderView) __repo: Repository<OrderView>) {
    super(__repo);
  }
}
