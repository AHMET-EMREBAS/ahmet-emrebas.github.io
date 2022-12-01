import { Project } from '@ae/models/pms/project/Project';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './ProjectService';
import { ProjectViewService } from './ProjectViewService';
import { ProjectController } from './ProjectController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, ProjectView, ProjectOptionView]),
  ],
  providers: [ProjectService, ProjectViewService],
  controllers: [ProjectController],
})
export class ProjectModule {}
