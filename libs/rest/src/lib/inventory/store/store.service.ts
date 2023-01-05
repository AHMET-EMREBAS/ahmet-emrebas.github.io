import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Store, CreateStoreDto } from '@ae/models/inventory/store';

@Injectable()
export class StoreService extends ResourceService<CreateStoreDto> {
  constructor(@InjectRepository(Store) __repo: Repository<CreateStoreDto>) {
    super(__repo);
  }
}
