import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateDepartmentInput,
  Department,
  UpdateDepartmentInput,
} from '@techbir/entities-graph';
import { DepartmentService, DepartmentPubSub } from './department.service';

@Resolver(() => Department)
export class DepartmentResolver extends createResolver({
  entity: Department,
  createDto: CreateDepartmentInput,
  queryDto: QueryInput,
  pubSub: DepartmentPubSub,
  updateDto: UpdateDepartmentInput,
}) {
  constructor(service: DepartmentService) {
    super(service);
  }
}
