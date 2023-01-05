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
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from '@ae/models/inventory/employee';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { EmployeeViewService } from './employee-view.service';

@ResourceController()
export class EmployeeViewController {
  constructor(private readonly service: EmployeeViewService) {}

  @GetAll()
  findEmployees(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findEmployeeByIdEmployee(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
