import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreOptionViewService extends ResourceViewService<StoreOptionView> {
  constructor(
    @InjectRepository(StoreOptionView)
    messageViewRepo: Repository<StoreOptionView>
  ) {
    super(messageViewRepo);
  }
}
