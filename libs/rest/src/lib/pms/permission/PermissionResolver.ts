import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Permission } from '@ae/models/pms/permission/Permission';
import { PermissionView } from '@ae/models/pms/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/pms/permission/PermissionOptionView';
import { CreatePermissionDto } from '@ae/models/pms/permission/dto/CreatePermissionDto';
import { UpdatePermissionDto } from '@ae/models/pms/permission/dto/UpdatePermissionDto';

import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { PermissionOptionViewService } from './PermissionOptionViewService';

@Resolver(Permission)
export class PermissionResolver {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService,
    private readonly optionViewService: PermissionOptionViewService
  ) {}

  @GRead(Permission)
  findPermission(@Args('query') query: QueryDto<Permission & PermissionView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Permission)
  findByPermissionId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Permission)
  savePermission(@Args('permission') body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updatePermission(
    @ArgId() id: number,
    @Args('permission') body: UpdatePermissionDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deletePermission(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countPermission() {
    return this.service.count();
  }

  @GOptions()
  optionsPermission(
    @Args('query') query: QueryDto<Permission & PermissionView>
  ) {
    return this.optionViewService.find(query);
  }
}
