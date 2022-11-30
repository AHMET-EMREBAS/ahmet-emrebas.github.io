import { Product } from '@ae/models/ims/product/Product';

import { Store } from '@ae/models/ims/store/Store';

import { Quantity } from '@ae/models/ims/quantity/Quantity';
import { QuantityView } from '@ae/models/ims/quantity/QuantityView';
import { QuantityOptionView } from '@ae/models/ims/quantity/QuantityOptionView';

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
