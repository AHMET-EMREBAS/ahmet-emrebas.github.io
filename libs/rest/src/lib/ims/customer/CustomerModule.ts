import { Permission } from '@ae/models/ims/permission/Permission';

import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';

import { Customer } from '@ae/models/ims/customer/Customer';
import { CustomerView } from '@ae/models/ims/customer/CustomerView';
import { CustomerOptionView } from '@ae/models/ims/customer/CustomerOptionView';

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
