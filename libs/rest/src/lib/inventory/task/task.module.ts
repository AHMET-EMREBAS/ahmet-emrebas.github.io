import { Module, OnModuleInit } from '@nestjs/common';
import { Task, TaskView } from '@ae/models/inventory/task';
import { TaskController } from './task.controller';
import { TaskViewController } from './task-view.controller';
import { TaskService } from './task.service';
import { TaskViewService } from './task-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from '@ae/models/inventory/employee';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskView, Employee])],
  controllers: [TaskController, TaskViewController],
  providers: [TaskService, TaskViewService],
})
export class TaskModule implements OnModuleInit {
  constructor(private readonly service: TaskService) {}
  onModuleInit() {
    // Seed database
  }
}
