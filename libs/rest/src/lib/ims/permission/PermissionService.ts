import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from '@ae/models/ims/permission';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService extends ResourceService<Permission> {
  constructor(
    @InjectRepository(Permission) permissionRepo: Repository<Permission>
  ) {
    super(permissionRepo);
  }
}
