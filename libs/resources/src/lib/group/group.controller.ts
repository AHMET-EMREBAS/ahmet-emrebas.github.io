import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateGroupDto, Group, UpdateGroupDto } from '@techbir/entities';
import { GroupService, GroupPubSub } from './group.service';

@Controller()
export class GroupController extends createController({
  createDto: CreateGroupDto,
  entity: Group,
  pubSub: GroupPubSub,
  queryDto: QueryDto,
  updateDto: UpdateGroupDto,
}) {
  constructor(service: GroupService) {
    super(service);
  }
}
