import { Controller, Get, Post, Query, Sse } from '@nestjs/common';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  profile = new BehaviorSubject({ message: 'Hello world' });
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData() {
    return firstValueFrom(this.profile);
  }

  @Post('hello')
  createHello(@Query('message') message: string) {
    console.log(message);
    return this.profile.next({ message });
  }

  @Sse('talk')
  talk() {
    return this.profile;
  }
}
