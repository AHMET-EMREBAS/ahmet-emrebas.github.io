import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Department } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const DepartmentPubSub = new PubSub();

@Injectable()
export class DepartmentService extends ResourceService {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo, ['name']);
  }
}
