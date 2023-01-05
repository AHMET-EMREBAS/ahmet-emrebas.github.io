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
import { PermissionService } from './permission.service';

@ResourceController()
export class PermissionController {
  constructor(private readonly service: PermissionService) {}

  @PostOne()
  saveOnePermission(@PostBody() body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOnePermission(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOnePermission(
    @ParamId() id: number,
    @UpdateBody() body: UpdatePermissionDto
  ) {
    return this.service.update(id, body);
  }
}
