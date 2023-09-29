import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Sample {
  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => Sample, (s) => s.category)
  category: Sample;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
