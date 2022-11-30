import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { QuantityOptionView } from '@ae/models/ims/quantity/QuantityOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantityOptionViewService extends ResourceViewService<QuantityOptionView> {
  constructor(
    @InjectRepository(QuantityOptionView)
    messageViewRepo: Repository<QuantityOptionView>
  ) {
    super(messageViewRepo);
  }
}
