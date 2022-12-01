import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '@ae/models/pms/task/Task';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService extends ResourceService<Task> {
  constructor(@InjectRepository(Task) taskRepo: Repository<Task>) {
    super(taskRepo);
  }
}
