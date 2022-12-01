import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '@ae/models/pms/project/Project';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService extends ResourceService<Project> {
  constructor(@InjectRepository(Project) projectRepo: Repository<Project>) {
    super(projectRepo);
  }
}
