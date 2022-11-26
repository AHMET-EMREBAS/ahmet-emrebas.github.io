import { Controller, Get } from '@nestjs/common';

@Controller('')
export class SampleController {
  @Get()
  read() {
    return '';
  }
}
