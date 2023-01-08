import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSampleDto, UpdateSampleDto } from './dto';
import { QuerySampleDto } from './dto/query-sample.dto';
import { SampleService } from './sample.service';

@ApiTags(SampleController.name)
@Controller('sample')
export class SampleController {
  constructor(private readonly service: SampleService) {}

  @Get()
  find(@Query() query?: QuerySampleDto) {
    return this.service.find(query);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post()
  save(@Body() sample: CreateSampleDto) {
    return this.service.save(sample);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() sample: UpdateSampleDto
  ) {
    return this.service.update(id, sample);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
