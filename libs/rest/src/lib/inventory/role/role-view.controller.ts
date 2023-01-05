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
import { RoleViewService } from './role-view.service';

@ResourceController()
export class RoleViewController {
  constructor(private readonly service: RoleViewService) {}

  @GetAll()
  findRoles(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findRoleByIdRole(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
