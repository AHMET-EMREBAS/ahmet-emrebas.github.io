import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleUniqueValidatorService } from './validators';

import { Sample } from './entity/sample.entity';
import { SampleView } from './entity/sample.view';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [SampleService, SampleUniqueValidatorService],
})
export class SampleModule {}
