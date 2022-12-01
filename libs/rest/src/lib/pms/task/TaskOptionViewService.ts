import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskOptionViewService extends ResourceViewService<TaskOptionView> {
  constructor(
    @InjectRepository(TaskOptionView)
    messageViewRepo: Repository<TaskOptionView>
  ) {
    super(messageViewRepo);
  }
}
