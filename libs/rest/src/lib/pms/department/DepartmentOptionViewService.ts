import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentOptionView } from '@ae/models/pms/department/DepartmentOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentOptionViewService extends ResourceViewService<DepartmentOptionView> {
  constructor(
    @InjectRepository(DepartmentOptionView)
    messageViewRepo: Repository<DepartmentOptionView>
  ) {
    super(messageViewRepo);
  }
}
