import { Pricelevel } from '@ae/models/ims/pricelevel';

import { Product } from '@ae/models/ims/product';

import { Price, PriceView } from '@ae/models/ims/price';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';
import { PriceController } from './PriceController';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView, Pricelevel, Product])],
  providers: [PriceService, PriceViewService],
  controllers: [PriceController],
})
export class PriceModule {}
