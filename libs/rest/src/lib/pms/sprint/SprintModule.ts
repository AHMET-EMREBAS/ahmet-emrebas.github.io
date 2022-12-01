import { Project } from '@ae/models/pms/project/Project';

import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SprintService } from './SprintService';
import { SprintViewService } from './SprintViewService';
import { SprintController } from './SprintController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sprint, SprintView, SprintOptionView, Project]),
  ],
  providers: [SprintService, SprintViewService, SprintController],
  controllers: [SprintController],
})
export class SprintModule {}
