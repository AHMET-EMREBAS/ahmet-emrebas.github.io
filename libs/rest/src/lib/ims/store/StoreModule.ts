import { Pricelevel } from '@ae/models/ims/pricelevel/Pricelevel';

import { Store } from '@ae/models/ims/store/Store';
import { StoreView } from '@ae/models/ims/store/StoreView';
import { StoreOptionView } from '@ae/models/ims/store/StoreOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { StoreOptionViewService } from './StoreOptionViewService';

import { StoreController } from './StoreController';
import { StoreResolver } from './StoreResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store, StoreView, StoreOptionView, Pricelevel]),
  ],
  providers: [
    StoreService,
    StoreViewService,
    StoreOptionViewService,
    StoreResolver,
  ],
  controllers: [StoreController],
})
export class StoreModule {}
