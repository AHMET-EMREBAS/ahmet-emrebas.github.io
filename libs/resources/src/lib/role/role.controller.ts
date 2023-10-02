import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateRoleDto, Role, UpdateRoleDto } from '@techbir/entities';
import { RoleService, RolePubSub } from './role.service';

@Controller()
export class RoleController extends createController({
  createDto: CreateRoleDto,
  entity: Role,
  pubSub: RolePubSub,
  queryDto: QueryDto,
  updateDto: UpdateRoleDto,
}) {
  constructor(service: RoleService) {
    super(service);
  }
}
