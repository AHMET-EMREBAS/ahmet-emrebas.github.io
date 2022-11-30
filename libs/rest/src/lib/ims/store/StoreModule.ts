import { Pricelevel } from '@ae/models/ims/pricelevel';

import { Store, StoreView } from '@ae/models/ims/store';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './StoreService';
import { StoreViewService } from './StoreViewService';
import { StoreController } from './StoreController';

@Module({
  imports: [TypeOrmModule.forFeature([Store, StoreView, Pricelevel])],
  providers: [StoreService, StoreViewService],
  controllers: [StoreController],
})
export class StoreModule {}
