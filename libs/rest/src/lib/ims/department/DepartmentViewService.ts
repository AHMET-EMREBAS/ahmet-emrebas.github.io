import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentView } from '@ae/models/ims/department/DepartmentView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentViewService extends ResourceViewService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView)
    departmentViewRepo: Repository<DepartmentView>
  ) {
    super(departmentViewRepo);
  }
}
