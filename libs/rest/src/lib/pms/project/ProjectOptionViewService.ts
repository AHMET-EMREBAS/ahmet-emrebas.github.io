import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectOptionView } from '@ae/models/pms/project/ProjectOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectOptionViewService extends ResourceViewService<ProjectOptionView> {
  constructor(
    @InjectRepository(ProjectOptionView)
    projectViewRepo: Repository<ProjectOptionView>
  ) {
    super(projectViewRepo);
  }
}
