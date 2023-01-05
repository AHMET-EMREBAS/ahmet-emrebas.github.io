import { Module, OnModuleInit } from '@nestjs/common';
import { Porder, PorderView } from '@ae/models/inventory/porder';
import { PorderController } from './porder.controller';
import { PorderViewController } from './porder-view.controller';
import { PorderService } from './porder.service';
import { PorderViewService } from './porder-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Store } from '@ae/models/inventory/store';
import { Product } from '@ae/models/inventory/product';
import { Customer } from '@ae/models/inventory/customer';
import { Employee } from '@ae/models/inventory/employee';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Porder,
      PorderView,
      Store,
      Product,
      Customer,
      Employee,
    ]),
  ],
  controllers: [PorderController, PorderViewController],
  providers: [PorderService, PorderViewService],
})
export class PorderModule implements OnModuleInit {
  constructor(private readonly service: PorderService) {}
  onModuleInit() {
    // Seed database
  }
}
