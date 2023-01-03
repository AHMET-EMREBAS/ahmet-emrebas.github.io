import { ResourceService } from '@ae/core/rest';
import { Store } from './store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService extends ResourceService<Store> {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo);
  }
}
