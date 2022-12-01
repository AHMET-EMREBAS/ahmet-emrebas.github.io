import { User } from '@ae/models/pms/user/User';

import { Tag } from '@ae/models/pms/tag/Tag';

import { Task } from '@ae/models/pms/task/Task';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './TaskService';
import { TaskViewService } from './TaskViewService';
import { TaskController } from './TaskController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, TaskView, TaskOptionView, User, Tag]),
  ],
  providers: [TaskService, TaskViewService],
  controllers: [TaskController],
})
export class TaskModule {}
