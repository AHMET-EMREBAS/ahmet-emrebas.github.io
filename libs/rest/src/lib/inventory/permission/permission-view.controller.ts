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
import {
  CreatePermissionDto,
  UpdatePermissionDto,
} from '@ae/models/inventory/permission';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { PermissionViewService } from './permission-view.service';

@ResourceController()
export class PermissionViewController {
  constructor(private readonly service: PermissionViewService) {}

  @GetAll()
  findPermissions(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findPermissionByIdPermission(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
