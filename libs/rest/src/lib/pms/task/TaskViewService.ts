import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskViewService extends ResourceViewService<TaskView> {
  constructor(@InjectRepository(TaskView) taskViewRepo: Repository<TaskView>) {
    super(taskViewRepo);
  }
}
