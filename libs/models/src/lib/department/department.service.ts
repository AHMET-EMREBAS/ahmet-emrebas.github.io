import { ResourceService } from '@ae/core/rest';
import { Department } from './department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService extends ResourceService<Department> {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo);
  }
}
