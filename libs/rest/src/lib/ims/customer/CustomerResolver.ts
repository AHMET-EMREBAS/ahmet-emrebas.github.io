import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Customer } from '@ae/models/ims/customer/Customer';
import { CustomerView } from '@ae/models/ims/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/ims/customer/CustomerOptionView';
import { CreateCustomerDto } from '@ae/models/ims/customer/dto/CreateCustomerDto';
import { UpdateCustomerDto } from '@ae/models/ims/customer/dto/UpdateCustomerDto';
import { ReadCustomerDto } from '@ae/models/ims/customer/dto/ReadCustomerDto';
import { QueryCustomerDto } from '@ae/models/ims/customer/dto/QueryCustomerDto';

import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';
import { CustomerOptionViewService } from './CustomerOptionViewService';

@Resolver(Customer)
export class CustomerResolver {
  constructor(
    private readonly service: CustomerService,
    private readonly viewService: CustomerViewService,
    private readonly optionViewService: CustomerOptionViewService
  ) {}

  @GRead(ReadCustomerDto)
  findCustomers(
    @Args('query', { nullable: true }) query: QueryDto<Customer>,
    @Args('where', { nullable: true }) where: QueryCustomerDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(CustomerView)
  viewCustomers(
    @Args('query', { nullable: true }) query: QueryDto<CustomerView>,
    @Args('where', { nullable: true }) where: QueryCustomerDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadCustomerDto)
  findByCustomerId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(CustomerView)
  viewByCustomerId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadCustomerDto)
  saveCustomer(@Args('customer') body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadCustomerDto)
  saveCustomers(
    @Args('customers', { type: () => [CreateCustomerDto] })
    body: CreateCustomerDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateCustomer(
    @ArgId() id: number,
    @Args('customer') body: UpdateCustomerDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteCustomer(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GAdd('permissions')
  addCustomerPermissions(@ArgId() id: number, @ArgRid() permissionsId: number) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @GRemove('permissions')
  removeCustomerPermissions(@ArgId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @GSet('pricelevel')
  setCustomerPricelevel(@ArgId() id: number, @ArgRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @GUnset('pricelevel')
  unsetCustomerPricelevel(@ArgId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @GCount()
  countCustomer() {
    return this.service.count();
  }

  @GOptions()
  optionsCustomer(@Args('query') query: QueryDto<CustomerOptionView>) {
    return this.optionViewService.find(query);
  }
}
