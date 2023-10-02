import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateGroupInput,
  Group,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { GroupService, GroupPubSub } from './group.service';

@Resolver(() => Group)
export class GroupResolver extends createResolver({
  entity: Group,
  createDto: CreateGroupInput,
  queryDto: QueryInput,
  pubSub: GroupPubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: GroupService) {
    super(service);
  }
}
