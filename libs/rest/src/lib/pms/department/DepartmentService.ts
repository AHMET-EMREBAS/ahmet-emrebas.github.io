import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '@ae/models/pms/department/Department';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService extends ResourceService<Department> {
  constructor(
    @InjectRepository(Department) departmentRepo: Repository<Department>
  ) {
    super(departmentRepo);
  }
}
