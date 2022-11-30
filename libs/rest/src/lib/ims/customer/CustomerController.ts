import {
  Add,
  Aggregate,
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
} from '@ae/core';

import { Customer } from '@ae/models/ims/customer/Customer';
import { CustomerView } from '@ae/models/ims/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/ims/customer/CustomerOptionView';
import { CreateCustomerDto } from '@ae/models/ims/customer/dto/CreateCustomerDto';
import { UpdateCustomerDto } from '@ae/models/ims/customer/dto/UpdateCustomerDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(
    private readonly service: CustomerService,
    private readonly viewService: CustomerViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Customer & CustomerView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateCustomerDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Add('permissions')
  addPermissions(@ParamId() id: number, @ParamRid() permissionsId: number) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @Remove('permissions')
  removePermissions(@ParamId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @Set('pricelevel')
  setPricelevel(@ParamId() id: number, @ParamRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @Unset('pricelevel')
  unsetPricelevel(@ParamId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
