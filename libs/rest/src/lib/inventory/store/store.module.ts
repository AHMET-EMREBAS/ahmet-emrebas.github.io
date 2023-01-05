import { Module } from '@nestjs/common';
import { Store, StoreView } from '@ae/models/inventory/store';
import { StoreController } from './store.controller';
import { StoreViewController } from './store-view.controller';
import { StoreService } from './store.service';
import { StoreViewService } from './store-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PriceLevel } from '@ae/models/inventory/price-level';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView, PriceLevel])],
  controllers: [StoreController, StoreViewController],
  providers: [StoreService, StoreViewService],
})
export class StoreModule {}
