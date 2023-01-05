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
  CreateCustomerDto,
  UpdateCustomerDto,
} from '@ae/models/inventory/customer';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { CustomerViewService } from './customer-view.service';

@ResourceController()
export class CustomerViewController {
  constructor(private readonly service: CustomerViewService) {}

  @GetAll()
  findCustomers(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findCustomerByIdCustomer(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
