import { Product } from '@ae/models/pms/product/Product';

import { Store } from '@ae/models/pms/store/Store';

import { Quantity } from '@ae/models/pms/quantity/Quantity';
import { QuantityView } from '@ae/models/pms/quantity/QuantityView';
import { QuantityOptionView } from '@ae/models/pms/quantity/QuantityOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';
import { QuantityController } from './QuantityController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Quantity,
      QuantityView,
      QuantityOptionView,

      Product,

      Store,
    ]),
  ],
  providers: [QuantityService, QuantityViewService],
  controllers: [QuantityController],
})
export class QuantityModule {}
