import { Module } from '@nestjs/common';
import { SampleService } from './sampe.service';
import { SampleController } from './sample.controller';

@Module({
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
