import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { EmployeeView } from '@ae/models/inventory/employee';

@Injectable()
export class EmployeeViewService extends ResourceService<EmployeeView> {
  constructor(
    @InjectRepository(EmployeeView) __repo: Repository<EmployeeView>
  ) {
    super(__repo);
  }
}
