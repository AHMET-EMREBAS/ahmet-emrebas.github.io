import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Task } from '@ae/models/pms/task/Task';
import { TaskView } from '@ae/models/pms/task/TaskView';
import { TaskOptionView } from '@ae/models/pms/task/TaskOptionView';
import { CreateTaskDto } from '@ae/models/pms/task/dto/CreateTaskDto';
import { UpdateTaskDto } from '@ae/models/pms/task/dto/UpdateTaskDto';

import { TaskService } from './TaskService';
import { TaskViewService } from './TaskViewService';
import { TaskOptionViewService } from './TaskOptionViewService';

@Resolver(Task)
export class TaskResolver {
  constructor(
    private readonly service: TaskService,
    private readonly viewService: TaskViewService,
    private readonly optionViewService: TaskOptionViewService
  ) {}

  @GRead(Task)
  findTask(@Args('query') query: QueryDto<Task & TaskView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Task)
  findByTaskId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Task)
  saveTask(@Args('task') body: CreateTaskDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateTask(@ArgId() id: number, @Args('task') body: UpdateTaskDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteTask(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('user')
  setTaskUser(@ArgId() id: number, @ArgRid() userId: number) {
    return this.service.set(id, userId, 'user');
  }

  @GUnset('user')
  unsetTaskUser(@ArgId() id: number) {
    return this.service.unset(id, 'user');
  }

  @GAdd('tag')
  addTaskTag(@ArgId() id: number, @ArgRid() tagId: number) {
    return this.service.set(id, tagId, 'tag');
  }

  @GRemove('tag')
  removeTaskTag(@ArgId() id: number) {
    return this.service.unset(id, 'tag');
  }

  @GCount()
  countTask() {
    return this.service.count();
  }

  @GOptions()
  optionsTask(@Args('query') query: QueryDto<Task & TaskView>) {
    return this.optionViewService.find(query);
  }
}
