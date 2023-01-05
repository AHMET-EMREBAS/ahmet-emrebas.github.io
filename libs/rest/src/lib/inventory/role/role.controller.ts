import { QueryDto } from '@ae/core/dto';
import {
  ResourceController,
  GetAll,
  GetOneById,
  PostOne,
  UpdateOne,
  DeleteOne,
  SetRelation,
  UnsetRelation,
  AddRelation,
  RemoveRelation,
  PostBody,
  UpdateBody,
  QueryObject,
  ParamId,
} from '@ae/core/rest';
import { CreateRoleDto, UpdateRoleDto } from '@ae/models/inventory/role';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { RoleService } from './role.service';

@ResourceController()
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @PostOne()
  saveOneRole(@PostBody() body: CreateRoleDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneRole(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneRole(@ParamId() id: number, @UpdateBody() body: UpdateRoleDto) {
    return this.service.update(id, body);
  }

  @AddRelation('permissions')
  addPermissions(options: AddRelationDto) {
    return this.service.add({ ...options, rname: 'permissions' });
  }

  @RemoveRelation('permissions')
  removePermissions(options: RemoveRelationDto) {
    return this.service.unset({ ...options, rname: 'permissions' });
  }
}
