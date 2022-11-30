import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';

import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';

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
