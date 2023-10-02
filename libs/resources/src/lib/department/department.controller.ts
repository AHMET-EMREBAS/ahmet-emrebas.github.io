import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import {
  CreateDepartmentDto,
  Department,
  UpdateDepartmentDto,
} from '@techbir/entities';
import { DepartmentService, DepartmentPubSub } from './department.service';

@Controller()
export class DepartmentController extends createController({
  createDto: CreateDepartmentDto,
  entity: Department,
  pubSub: DepartmentPubSub,
  queryDto: QueryDto,
  updateDto: UpdateDepartmentDto,
}) {
  constructor(service: DepartmentService) {
    super(service);
  }
}
