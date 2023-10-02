import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Product } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const ProductPubSub = new PubSub();

@Injectable()
export class ProductService extends ResourceService {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo, ['name']);
  }
}
