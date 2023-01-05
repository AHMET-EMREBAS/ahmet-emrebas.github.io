import { Module, OnModuleInit } from '@nestjs/common';
import { Quantity, QuantityView } from '@ae/models/inventory/quantity';
import { QuantityController } from './quantity.controller';
import { QuantityViewController } from './quantity-view.controller';
import { QuantityService } from './quantity.service';
import { QuantityViewService } from './quantity-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '@ae/models/inventory/product';
import { Store } from '@ae/models/inventory/store';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView, Product, Store])],
  controllers: [QuantityController, QuantityViewController],
  providers: [QuantityService, QuantityViewService],
})
export class QuantityModule implements OnModuleInit {
  constructor(private readonly service: QuantityService) {}
  onModuleInit() {
    // Seed database
  }
}
