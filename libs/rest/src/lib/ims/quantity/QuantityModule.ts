import { Product } from '@ae/models/ims/product';

import { Store } from '@ae/models/ims/store';

import { Quantity, QuantityView } from '@ae/models/ims/quantity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';
import { QuantityController } from './QuantityController';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView, Product, Store])],
  providers: [QuantityService, QuantityViewService],
  controllers: [QuantityController],
})
export class QuantityModule {}
