import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from '@ae/models/pms/store/Store';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService extends ResourceService<Store> {
  constructor(@InjectRepository(Store) storeRepo: Repository<Store>) {
    super(storeRepo);
  }
}
