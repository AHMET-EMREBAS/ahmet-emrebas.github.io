import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { Customer } from '@ae/models/ims/customer/Customer';
import { CustomerView } from '@ae/models/ims/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/ims/customer/CustomerOptionView';
import { CreateCustomerDto } from '@ae/models/ims/customer/dto/CreateCustomerDto';
import { UpdateCustomerDto } from '@ae/models/ims/customer/dto/UpdateCustomerDto';
import { QueryCustomerDto } from '@ae/models/ims/customer/dto/QueryCustomerDto';

import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';
import { CustomerOptionViewService } from './CustomerOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/customer')
export class CustomerController {
  constructor(
    private readonly service: CustomerService,
    private readonly viewService: CustomerViewService,
    private readonly optionViewService: CustomerOptionViewService
  ) {}

  @Read()
  findCustomer(
    @Query() query: QueryDto<Customer & CustomerView>,
    @Query() where: QueryCustomerDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByCustomerId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveCustomer(@Body() body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @Update()
  updateCustomer(@ParamId() id: number, @Body() body: UpdateCustomerDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteCustomer(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addCustomerPermissions(
    @ParamId() id: number,
    @ParamRid() permissionsId: number
  ) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removeCustomerPermissions(@ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setCustomerPricelevel(
    @ParamId() id: number,
    @ParamRid() pricelevelId: number
  ) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetCustomerPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Count()
  countCustomer() {
    return this.service.count();
  }

  @Options()
  optionsCustomer(@Query() query: QueryDto<Customer & CustomerView>) {
    return this.optionViewService.find(query);
  }
}
