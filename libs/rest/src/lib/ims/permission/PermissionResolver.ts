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
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Permission } from '@ae/models/ims/permission/Permission';
import { PermissionView } from '@ae/models/ims/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/ims/permission/PermissionOptionView';
import { CreatePermissionDto } from '@ae/models/ims/permission/dto/CreatePermissionDto';
import { UpdatePermissionDto } from '@ae/models/ims/permission/dto/UpdatePermissionDto';
import { ReadPermissionDto } from '@ae/models/ims/permission/dto/ReadPermissionDto';
import { QueryPermissionDto } from '@ae/models/ims/permission/dto/QueryPermissionDto';

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

  @GRead(ReadPermissionDto)
  findPermissions(
    @Args('query', { nullable: true }) query: QueryDto<Permission>,
    @Args('where', { nullable: true }) where: QueryPermissionDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(PermissionView)
  viewPermissions(
    @Args('query', { nullable: true }) query: QueryDto<PermissionView>,
    @Args('where', { nullable: true }) where: QueryPermissionDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadPermissionDto)
  findByPermissionId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(PermissionView)
  viewByPermissionId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadPermissionDto)
  savePermission(@Args('permission') body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadPermissionDto)
  savePermissions(
    @Args('permissions', { type: () => [CreatePermissionDto] })
    body: CreatePermissionDto[]
  ) {
    return this.service.saveMany(body);
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
  optionsPermission(@Args('query') query: QueryDto<PermissionOptionView>) {
    return this.optionViewService.find(query);
  }
}
