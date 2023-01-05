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
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from '@ae/models/inventory/department';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { DepartmentViewService } from './department-view.service';

@ResourceController()
export class DepartmentViewController {
  constructor(private readonly service: DepartmentViewService) {}

  @GetAll()
  findDepartments(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findDepartmentByIdDepartment(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
