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
import { DepartmentService } from './department.service';

@ResourceController()
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @PostOne()
  saveOneDepartment(@PostBody() body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneDepartment(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneDepartment(
    @ParamId() id: number,
    @UpdateBody() body: UpdateDepartmentDto
  ) {
    return this.service.update(id, body);
  }
}
