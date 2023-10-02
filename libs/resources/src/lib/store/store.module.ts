import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store, PriceLevel } from '@techbir/entities';
import { StoreResolver } from './store.resolver';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Store, PriceLevel])],
  controllers: [StoreController],
  providers: [StoreService, StoreResolver],
})
export class StoreModule {}
