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

  @GRead(Customer)
  findCustomer(@Args('query') query: QueryDto<Customer & CustomerView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Customer)
  findByCustomerId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Customer)
  saveCustomer(@Args('customer') body: CreateCustomerDto) {
    return this.service.save(body);
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
  optionsCustomer(@Args('query') query: QueryDto<Customer & CustomerView>) {
    return this.optionViewService.find(query);
  }
}
