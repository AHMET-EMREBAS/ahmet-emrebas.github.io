import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Task, CreateTaskDto } from '@ae/models/inventory/task';

@Injectable()
export class TaskService extends ResourceService<CreateTaskDto> {
  constructor(@InjectRepository(Task) __repo: Repository<CreateTaskDto>) {
    super(__repo);
  }
}
