import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectView } from '@ae/models/pms/project/ProjectView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectViewService extends ResourceViewService<ProjectView> {
  constructor(
    @InjectRepository(ProjectView) projectViewRepo: Repository<ProjectView>
  ) {
    super(projectViewRepo);
  }
}
