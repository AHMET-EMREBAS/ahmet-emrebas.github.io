import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Price } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const PricePubSub = new PubSub();

@Injectable()
export class PriceService extends ResourceService {
  constructor(@InjectRepository(Price) repo: Repository<Price>) {
    super(repo, ['name']);
  }
}
