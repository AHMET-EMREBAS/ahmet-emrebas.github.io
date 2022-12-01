import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';

import { Product } from '@ae/models/pms/product/Product';

import { Price } from '@ae/models/pms/price/Price';
import { PriceView } from '@ae/models/pms/price/PriceView';
import { PriceOptionView } from '@ae/models/pms/price/PriceOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';
import { PriceController } from './PriceController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Price,
      PriceView,
      PriceOptionView,

      Pricelevel,

      Product,
    ]),
  ],
  providers: [PriceService, PriceViewService],
  controllers: [PriceController],
})
export class PriceModule {}
