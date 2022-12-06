import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSampleDto } from './dto/create-sample.dto';
import { SampleService } from './sample.service';

@ApiTags(SampleController.name)
@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  find() {
    return this.sampleService.find();
  }

  @Post()
  save(@Body() sample: CreateSampleDto) {
    return this.sampleService.save(sample);
  }
}
