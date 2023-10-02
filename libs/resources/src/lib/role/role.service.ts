import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Role } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const RolePubSub = new PubSub();

@Injectable()
export class RoleService extends ResourceService {
  constructor(@InjectRepository(Role) repo: Repository<Role>) {
    super(repo, ['name']);
  }
}
