import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature } from './entity/feature.entity';
import { FeatureResolver } from './feature.resolver';
import { FeatureController } from './feature.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Feature])],
  controllers: [FeatureController],
  providers: [FeatureResolver],
})
export class FeatureModule {}
