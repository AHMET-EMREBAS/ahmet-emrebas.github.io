import { Controller, Get, Param, Post, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('login')
  login(
    @Query('username') username: string,
    @Query('password') password: string
  ) {
    console.log(username, password);
  }
}
