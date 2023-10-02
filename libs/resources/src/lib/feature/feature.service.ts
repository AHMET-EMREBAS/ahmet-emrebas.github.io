import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Feature } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const FeaturePubSub = new PubSub();

@Injectable()
export class FeatureService extends ResourceService {
  constructor(@InjectRepository(Feature) repo: Repository<Feature>) {
    super(repo, ['name']);
  }
}
