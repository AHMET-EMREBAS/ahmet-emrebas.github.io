import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';

import { Store } from '@ae/models/pms/store/Store';
import { StoreView } from '@ae/models/pms/store/StoreView';
import { StoreOptionView } from '@ae/models/pms/store/StoreOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { StoreController } from './StoreController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store, StoreView, StoreOptionView, Pricelevel]),
  ],
  providers: [StoreService, StoreViewService],
  controllers: [StoreController],
})
export class StoreModule {}
