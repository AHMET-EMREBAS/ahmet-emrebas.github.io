import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Quantity } from '@ae/models/pms/quantity/Quantity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantityService extends ResourceService<Quantity> {
  constructor(@InjectRepository(Quantity) quantityRepo: Repository<Quantity>) {
    super(quantityRepo);
  }
}
