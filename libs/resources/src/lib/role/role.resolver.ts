import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateRoleInput,
  Role,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { RoleService, RolePubSub } from './role.service';

@Resolver(() => Role)
export class RoleResolver extends createResolver({
  entity: Role,
  createDto: CreateRoleInput,
  queryDto: QueryInput,
  pubSub: RolePubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: RoleService) {
    super(service);
  }
}
