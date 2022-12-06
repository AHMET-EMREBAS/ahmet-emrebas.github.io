import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class AppSchedule {
  @Cron(CronExpression.EVERY_SECOND)
  cron() {
    console.log('Every second cron ...');
  }
}
