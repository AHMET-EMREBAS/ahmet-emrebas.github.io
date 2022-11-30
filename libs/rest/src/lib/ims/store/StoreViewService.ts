import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreViewService extends ResourceViewService<StoreView> {
  constructor(
    @InjectRepository(StoreView) storeViewRepo: Repository<StoreView>
  ) {
    super(storeViewRepo);
  }
}
