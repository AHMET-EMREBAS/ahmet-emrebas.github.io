import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Category } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const CategoryPubSub = new PubSub();

@Injectable()
export class CategoryService extends ResourceService {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo, ['name']);
  }
}
