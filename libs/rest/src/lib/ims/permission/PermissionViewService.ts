import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionView } from '@ae/models/ims/permission';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionViewService extends ResourceViewService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView)
    permissionViewRepo: Repository<PermissionView>
  ) {
    super(permissionViewRepo);
  }
}
