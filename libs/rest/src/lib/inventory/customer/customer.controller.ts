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
import { CustomerService } from './customer.service';

@ResourceController()
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @PostOne()
  saveOneCustomer(@PostBody() body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneCustomer(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneCustomer(
    @ParamId() id: number,
    @UpdateBody() body: UpdateCustomerDto
  ) {
    return this.service.update(id, body);
  }

  @SetRelation('price-level')
  setPriceLevel(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'priceLevel' });
  }

  @UnsetRelation('price-level')
  unsetPriceLevel(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'priceLevel' });
  }
}
