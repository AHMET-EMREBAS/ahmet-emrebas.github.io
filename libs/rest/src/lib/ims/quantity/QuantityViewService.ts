import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { QuantityView } from '@ae/models/ims/quantity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantityViewService extends ResourceViewService<QuantityView> {
  constructor(
    @InjectRepository(QuantityView) quantityViewRepo: Repository<QuantityView>
  ) {
    super(quantityViewRepo);
  }
}
