import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price } from './entity/price.entity';
import { PriceResolver } from './price.resolver';
import { PriceController } from './price.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Price])],
  controllers: [PriceController],
  providers: [PriceResolver],
})
export class PriceModule {}
