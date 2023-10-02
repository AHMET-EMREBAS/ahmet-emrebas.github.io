import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateGroupInput,
  Group,
  UpdateGroupInput,
} from '@techbir/entities-graph';
import { GroupService, GroupPubSub } from './group.service';

@Resolver(() => Group)
export class GroupResolver extends createResolver({
  entity: Group,
  createDto: CreateGroupInput,
  queryDto: QueryInput,
  pubSub: GroupPubSub,
  updateDto: UpdateGroupInput,
}) {
  constructor(service: GroupService) {
    super(service);
  }
}
