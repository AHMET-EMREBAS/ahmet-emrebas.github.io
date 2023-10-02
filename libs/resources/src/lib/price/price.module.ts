import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price, Product, PriceLevel } from '@techbir/entities';
import { PriceResolver } from './price.resolver';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Price, Product, PriceLevel])],
  controllers: [PriceController],
  providers: [PriceService, PriceResolver],
})
export class PriceModule {}
