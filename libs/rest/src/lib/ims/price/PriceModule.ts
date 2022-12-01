import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';

import { Product } from '@ae/models/ims/product/Product';

import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';

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
  providers: [PriceService, PriceViewService, PriceController],
  controllers: [PriceController],
})
export class PriceModule {}
