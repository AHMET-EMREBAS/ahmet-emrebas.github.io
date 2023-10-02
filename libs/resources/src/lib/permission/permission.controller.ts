import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import {
  CreatePermissionDto,
  Permission,
  UpdatePermissionDto,
} from '@techbir/entities';
import { PermissionService, PermissionPubSub } from './permission.service';

@Controller()
export class PermissionController extends createController({
  createDto: CreatePermissionDto,
  entity: Permission,
  pubSub: PermissionPubSub,
  queryDto: QueryDto,
  updateDto: UpdatePermissionDto,
}) {
  constructor(service: PermissionService) {
    super(service);
  }
}
