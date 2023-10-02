import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Permission } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const PermissionPubSub = new PubSub();

@Injectable()
export class PermissionService extends ResourceService {
  constructor(@InjectRepository(Permission) repo: Repository<Permission>) {
    super(repo, ['name']);
  }
}
