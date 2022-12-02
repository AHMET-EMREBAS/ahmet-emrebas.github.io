import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Delete,
  Controller,
} from '@ae/core';

import { Task } from '@ae/models/pms/task/Task';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';
import { CreateTaskDto } from '@ae/models/pms/task/dto/CreateTaskDto';
import { UpdateTaskDto } from '@ae/models/pms/task/dto/UpdateTaskDto';

import { TaskService } from './TaskService';
import { TaskViewService } from './TaskViewService';
import { TaskOptionViewService } from './TaskOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/task')
export class TaskController {
  constructor(
    private readonly service: TaskService,
    private readonly viewService: TaskViewService,
    private readonly optionViewService: TaskOptionViewService
  ) {}

  @Read()
  findTask(@Query() query: QueryDto<Task & TaskView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByTaskId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveTask(@Body() body: CreateTaskDto) {
    return this.service.save(body);
  }

  @Update()
  updateTask(@ParamId() id: number, @Body() body: UpdateTaskDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTask(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('user')
  setTaskUser(@ParamId() id: number, @ParamRid() userId: number) {
    return this.service.set(id, userId, 'user');
  }

  @Unset('user')
  unsetTaskUser(@ParamId() id: number) {
    return this.service.unset(id, 'user');
  }

  @Add('tag')
  addTaskTag(@ParamId() id: number, @ParamRid() tagId: number) {
    return this.service.set(id, tagId, 'tag');
  }

  @Remove('tag')
  removeTaskTag(@ParamId() id: number) {
    return this.service.unset(id, 'tag');
  }

  @Count()
  countTask() {
    return this.service.count();
  }

  @Options()
  optionsTask(@Query() query: QueryDto<Task & TaskView>) {
    return this.optionViewService.find(query);
  }
}
