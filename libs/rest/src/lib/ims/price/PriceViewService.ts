import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceView } from '@ae/models/ims/price';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceViewService extends ResourceViewService<PriceView> {
  constructor(
    @InjectRepository(PriceView) priceViewRepo: Repository<PriceView>
  ) {
    super(priceViewRepo);
  }
}
