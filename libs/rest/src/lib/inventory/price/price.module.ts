import { Module, OnModuleInit } from '@nestjs/common';
import { Price, PriceView } from '@ae/models/inventory/price';
import { PriceController } from './price.controller';
import { PriceViewController } from './price-view.controller';
import { PriceService } from './price.service';
import { PriceViewService } from './price-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '@ae/models/inventory/product';
import { PriceLevel } from '@ae/models/inventory/price-level';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView, Product, PriceLevel])],
  controllers: [PriceController, PriceViewController],
  providers: [PriceService, PriceViewService],
})
export class PriceModule implements OnModuleInit {
  constructor(private readonly service: PriceService) {}
  onModuleInit() {
    // Seed database
  }
}
