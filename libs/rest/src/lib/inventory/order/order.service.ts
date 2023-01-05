import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Order, CreateOrderDto } from '@ae/models/inventory/order';

@Injectable()
export class OrderService extends ResourceService<CreateOrderDto> {
  constructor(@InjectRepository(Order) __repo: Repository<CreateOrderDto>) {
    super(__repo);
  }
}
