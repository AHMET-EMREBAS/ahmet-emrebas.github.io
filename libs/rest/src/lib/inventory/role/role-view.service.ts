import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { RoleView } from '@ae/models/inventory/role';

@Injectable()
export class RoleViewService extends ResourceService<RoleView> {
  constructor(@InjectRepository(RoleView) __repo: Repository<RoleView>) {
    super(__repo);
  }
}
