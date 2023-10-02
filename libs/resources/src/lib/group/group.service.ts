import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Group } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const GroupPubSub = new PubSub();

@Injectable()
export class GroupService extends ResourceService {
  constructor(@InjectRepository(Group) repo: Repository<Group>) {
    super(repo, ['name']);
  }
}
