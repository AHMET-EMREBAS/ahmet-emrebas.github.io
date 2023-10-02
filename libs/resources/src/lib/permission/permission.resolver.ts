import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreatePermissionInput,
  Permission,
  UpdatePermissionInput,
} from '@techbir/entities-graph';
import { PermissionService, PermissionPubSub } from './permission.service';

@Resolver(() => Permission)
export class PermissionResolver extends createResolver({
  entity: Permission,
  createDto: CreatePermissionInput,
  queryDto: QueryInput,
  pubSub: PermissionPubSub,
  updateDto: UpdatePermissionInput,
}) {
  constructor(service: PermissionService) {
    super(service);
  }
}
