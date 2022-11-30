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
import {
  Customer,
  CustomerView,
  CreateCustomerDto,
  UpdateCustomerDto,
} from '@ae/models/ims/customer';
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

  @Add('permission')
  addPermission(@ParamId() id: number, @ParamRid() permissionId: number) {
    return this.service.set(id, permissionId, 'permission');
  }

  @Remove('permission')
  removePermission(@ParamId() id: number) {
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
