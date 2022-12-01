import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceOptionView } from '@ae/models/pms/price/PriceOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceOptionViewService extends ResourceViewService<PriceOptionView> {
  constructor(
    @InjectRepository(PriceOptionView)
    messageViewRepo: Repository<PriceOptionView>
  ) {
    super(messageViewRepo);
  }
}
