import { Module, OnModuleInit } from '@nestjs/common';
import { Clockin, ClockinView } from '@ae/models/inventory/clockin';
import { ClockinController } from './clockin.controller';
import { ClockinViewController } from './clockin-view.controller';
import { ClockinService } from './clockin.service';
import { ClockinViewService } from './clockin-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from '@ae/models/inventory/employee';

@Module({
  imports: [TypeOrmModule.forFeature([Clockin, ClockinView, Employee])],
  controllers: [ClockinController, ClockinViewController],
  providers: [ClockinService, ClockinViewService],
})
export class ClockinModule implements OnModuleInit {
  constructor(private readonly service: ClockinService) {}
  onModuleInit() {
    // Seed database
  }
}
