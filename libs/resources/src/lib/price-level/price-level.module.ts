import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevel } from '@techbir/entities';
import { PriceLevelResolver } from './price-level.resolver';
import { PriceLevelService } from './price-level.service';
import { PriceLevelController } from './price-level.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PriceLevel])],
  controllers: [PriceLevelController],
  providers: [PriceLevelService, PriceLevelResolver],
})
export class PriceLevelModule {}
