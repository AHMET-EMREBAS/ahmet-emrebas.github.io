import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quantity } from './entity/quantity.entity';
import { QuantityResolver } from './quantity.resolver';
import { QuantityController } from './quantity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity])],
  controllers: [QuantityController],
  providers: [QuantityResolver],
})
export class QuantityModule {}
