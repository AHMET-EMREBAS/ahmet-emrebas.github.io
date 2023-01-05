import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Employee, CreateEmployeeDto } from '@ae/models/inventory/employee';

@Injectable()
export class EmployeeService extends ResourceService<CreateEmployeeDto> {
  constructor(
    @InjectRepository(Employee) __repo: Repository<CreateEmployeeDto>
  ) {
    super(__repo);
  }
}
