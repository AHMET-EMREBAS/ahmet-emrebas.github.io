import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { PermissionView } from '@ae/models/inventory/permission';

@Injectable()
export class PermissionViewService extends ResourceService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView) __repo: Repository<PermissionView>
  ) {
    super(__repo);
  }
}
