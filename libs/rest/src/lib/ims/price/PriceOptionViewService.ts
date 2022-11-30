import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<PriceOptionView> {
  constructor(
    @InjectRepository(PriceOptionView)
    messageViewRepo: Repository<PriceOptionView>
  ) {
    super(messageViewRepo);
  }
}
