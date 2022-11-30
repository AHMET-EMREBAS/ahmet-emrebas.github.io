import { Permission } from '@ae/models/ims/permission';

import { Pricelevel } from '@ae/models/ims/pricelevel';

import { Customer, CustomerView } from '@ae/models/ims/customer';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './CustomerService';
import { CustomerViewService } from './CustomerViewService';
import { CustomerController } from './CustomerController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, CustomerView, Permission, Pricelevel]),
  ],
  providers: [CustomerService, CustomerViewService],
  controllers: [CustomerController],
})
export class CustomerModule {}
