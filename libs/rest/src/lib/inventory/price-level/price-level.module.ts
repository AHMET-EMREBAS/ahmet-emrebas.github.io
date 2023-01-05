import { Module } from '@nestjs/common';
import { PriceLevel, PriceLevelView } from '@ae/models/inventory/price-level';
import { PriceLevelController } from './price-level.controller';
import { PriceLevelViewController } from './price-level-view.controller';
import { PriceLevelService } from './price-level.service';
import { PriceLevelViewService } from './price-level-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PriceLevel, PriceLevelView])],
  controllers: [PriceLevelController, PriceLevelViewController],
  providers: [PriceLevelService, PriceLevelViewService],
})
export class PriceLevelModule {}
