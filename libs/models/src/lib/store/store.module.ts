import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevel } from '../price-level/price-level.entity';
import { Store } from './store.entity';
import { StoreService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([Store, PriceLevel])],
  controllers: [],
  providers: [StoreService],
})
export class StoreModule {}
