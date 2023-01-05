import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import {
  Department,
  CreateDepartmentDto,
} from '@ae/models/inventory/department';

@Injectable()
export class DepartmentService extends ResourceService<CreateDepartmentDto> {
  constructor(
    @InjectRepository(Department) __repo: Repository<CreateDepartmentDto>
  ) {
    super(__repo);
  }
}
