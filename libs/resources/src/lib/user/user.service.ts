import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { User } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const UserPubSub = new PubSub();

@Injectable()
export class UserService extends ResourceService {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo, ['name']);
  }
}
