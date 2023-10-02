import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Store } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const StorePubSub = new PubSub();

@Injectable()
export class StoreService extends ResourceService {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo, ['name']);
  }
}
