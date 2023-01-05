import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { TaskView } from '@ae/models/inventory/task';

@Injectable()
export class TaskViewService extends ResourceService<TaskView> {
  constructor(@InjectRepository(TaskView) __repo: Repository<TaskView>) {
    super(__repo);
  }
}
