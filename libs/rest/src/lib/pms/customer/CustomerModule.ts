import { Permission } from '@ae/models/pms/permission/Permission';

import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';

import { Customer } from '@ae/models/pms/customer/Customer';
import { CustomerView } from '@ae/models/pms/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/pms/customer/CustomerOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';
import { CustomerController } from './CustomerController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Customer,
      CustomerView,
      CustomerOptionView,

      Permission,

      Pricelevel,
    ]),
  ],
  providers: [CustomerService, CustomerViewService],
  controllers: [CustomerController],
})
export class CustomerModule {}
