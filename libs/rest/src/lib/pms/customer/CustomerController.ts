import {
  Add,
  Count,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Customer } from '@ae/models/pms/customer/Customer';
import { CustomerView } from '@ae/models/pms/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/pms/customer/CustomerOptionView';
import { CreateCustomerDto } from '@ae/models/pms/customer/dto/CreateCustomerDto';
import { UpdateCustomerDto } from '@ae/models/pms/customer/dto/UpdateCustomerDto';

import { Body, Delete, Query } from '@nestjs/common';

import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/customer', Customer)
export class CustomerController {
  constructor(
    private readonly service: CustomerService,
    private readonly viewService: CustomerViewService
  ) {}

  @Read(Customer)
  findCustomer(
    @Args('query') @Query() query: QueryDto<Customer & CustomerView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Customer)
  findByCustomerId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Customer)
  saveCustomer(@Args('customer') @Body() body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @Update()
  updateCustomer(
    @ArgId() @ParamId() id: number,
    @Args('customer') @Body() body: UpdateCustomerDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCustomer(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addCustomerPermissions(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() permissionsId: number
  ) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removeCustomerPermissions(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setCustomerPricelevel(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() pricelevelId: number
  ) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetCustomerPricelevel(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countCustomer() {
    return this.service.count();
  }
}
