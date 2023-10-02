import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreatePermissionInput,
  Permission,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { PermissionService, PermissionPubSub } from './permission.service';

@Resolver(() => Permission)
export class PermissionResolver extends createResolver({
  entity: Permission,
  createDto: CreatePermissionInput,
  queryDto: QueryInput,
  pubSub: PermissionPubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: PermissionService) {
    super(service);
  }
}
