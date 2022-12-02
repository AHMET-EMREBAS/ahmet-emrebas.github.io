import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionOptionView } from '@ae/models/pms/permission/PermissionOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionOptionViewService extends ResourceViewService<PermissionOptionView> {
  constructor(
    @InjectRepository(PermissionOptionView)
    permissionViewRepo: Repository<PermissionOptionView>
  ) {
    super(permissionViewRepo);
  }
}
