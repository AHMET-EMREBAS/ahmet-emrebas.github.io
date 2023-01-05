import { Module, OnModuleInit } from '@nestjs/common';
import { Customer, CustomerView } from '@ae/models/inventory/customer';
import { CustomerController } from './customer.controller';
import { CustomerViewController } from './customer-view.controller';
import { CustomerService } from './customer.service';
import { CustomerViewService } from './customer-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PriceLevel } from '@ae/models/inventory/price-level';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerView, PriceLevel])],
  controllers: [CustomerController, CustomerViewController],
  providers: [CustomerService, CustomerViewService],
})
export class CustomerModule implements OnModuleInit {
  constructor(private readonly service: CustomerService) {}
  onModuleInit() {
    // Seed database
  }
}
