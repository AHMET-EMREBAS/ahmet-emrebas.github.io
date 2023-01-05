import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { StoreView } from '@ae/models/inventory/store';

@Injectable()
export class StoreViewService extends ResourceService<StoreView> {
  constructor(@InjectRepository(StoreView) __repo: Repository<StoreView>) {
    super(__repo);
  }
}
