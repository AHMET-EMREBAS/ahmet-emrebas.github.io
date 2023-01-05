import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { DepartmentView } from '@ae/models/inventory/department';

@Injectable()
export class DepartmentViewService extends ResourceService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView) __repo: Repository<DepartmentView>
  ) {
    super(__repo);
  }
}
