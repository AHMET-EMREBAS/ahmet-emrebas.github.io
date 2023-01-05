import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Role, CreateRoleDto } from '@ae/models/inventory/role';

@Injectable()
export class RoleService extends ResourceService<CreateRoleDto> {
  constructor(@InjectRepository(Role) __repo: Repository<CreateRoleDto>) {
    super(__repo);
  }
}
