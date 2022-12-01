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
} from '@ae/core';

import { Task } from '@ae/models/pms/task/Task';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';
import { CreateTaskDto } from '@ae/models/pms/task/dto/CreateTaskDto';
import { UpdateTaskDto } from '@ae/models/pms/task/dto/UpdateTaskDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskService } from './TaskService';
import { TaskViewService } from './TaskViewService';

@ApiTags('pms | Task')
@Controller('pms/task')
export class TaskController {
  constructor(
    private readonly service: TaskService,
    private readonly viewService: TaskViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Task & TaskView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateTaskDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateTaskDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('user')
  setUser(@ParamId() id: number, @ParamRid() userId: number) {
    return this.service.set(id, userId, 'user');
  }

  @Unset('user')
  unsetUser(@ParamId() id: number) {
    return this.service.unset(id, 'user');
  }

  @Add('tag')
  addTag(@ParamId() id: number, @ParamRid() tagId: number) {
    return this.service.set(id, tagId, 'tag');
  }

  @Remove('tag')
  removeTag(@ParamId() id: number) {
    return this.service.unset(id, 'tag');
  }

  @Count()
  count() {
    return this.service.count();
  }
}
