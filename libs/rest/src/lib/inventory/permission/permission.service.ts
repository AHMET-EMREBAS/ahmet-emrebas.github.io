import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import {
  Permission,
  CreatePermissionDto,
} from '@ae/models/inventory/permission';

@Injectable()
export class PermissionService extends ResourceService<CreatePermissionDto> {
  constructor(
    @InjectRepository(Permission) __repo: Repository<CreatePermissionDto>
  ) {
    super(__repo);
  }
}
