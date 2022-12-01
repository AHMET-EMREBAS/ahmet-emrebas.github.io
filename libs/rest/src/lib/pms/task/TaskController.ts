import {
  Add,
  Count,
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
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Task } from '@ae/models/pms/task/Task';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';
import { CreateTaskDto } from '@ae/models/pms/task/dto/CreateTaskDto';
import { UpdateTaskDto } from '@ae/models/pms/task/dto/UpdateTaskDto';

import { Body, Delete, Query } from '@nestjs/common';

import { TaskService } from './TaskService';
import { TaskViewService } from './TaskViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/task', Task)
export class TaskController {
  constructor(
    private readonly service: TaskService,
    private readonly viewService: TaskViewService
  ) {}

  @Read(Task)
  findTask(@Args('query') @Query() query: QueryDto<Task & TaskView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Task)
  findByTaskId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Task)
  saveTask(@Args('task') @Body() body: CreateTaskDto) {
    return this.service.save(body);
  }

  @Update()
  updateTask(
    @ArgId() @ParamId() id: number,
    @Args('task') @Body() body: UpdateTaskDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTask(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('user')
  setTaskUser(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() userId: number
  ) {
    return this.service.set(id, userId, 'user');
  }

  @Unset('user')
  unsetTaskUser(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'user');
  }

  @Add('tag')
  addTaskTag(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() tagId: number
  ) {
    return this.service.set(id, tagId, 'tag');
  }

  @Remove('tag')
  removeTaskTag(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'tag');
  }

  @Count()
  countTask() {
    return this.service.count();
  }
}
