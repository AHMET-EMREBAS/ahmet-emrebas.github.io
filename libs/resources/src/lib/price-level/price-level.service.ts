import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { PriceLevel } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const PriceLevelPubSub = new PubSub();

@Injectable()
export class PriceLevelService extends ResourceService {
  constructor(@InjectRepository(PriceLevel) repo: Repository<PriceLevel>) {
    super(repo, ['name']);
  }
}
