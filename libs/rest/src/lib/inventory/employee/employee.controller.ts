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
import { EmployeeService } from './employee.service';

@ResourceController()
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @PostOne()
  saveOneEmployee(@PostBody() body: CreateEmployeeDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneEmployee(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneEmployee(
    @ParamId() id: number,
    @UpdateBody() body: UpdateEmployeeDto
  ) {
    return this.service.update(id, body);
  }

  @AddRelation('roles')
  addRoles(options: AddRelationDto) {
    return this.service.add({ ...options, rname: 'roles' });
  }

  @RemoveRelation('roles')
  removeRoles(options: RemoveRelationDto) {
    return this.service.unset({ ...options, rname: 'roles' });
  }
}
