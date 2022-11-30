import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Price } from '@ae/models/ims/price';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService extends ResourceService<Price> {
  constructor(@InjectRepository(Price) priceRepo: Repository<Price>) {
    super(priceRepo);
  }
}
