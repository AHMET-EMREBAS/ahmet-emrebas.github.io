import { QueryDto } from '@ae/core/dto';
import {
  ResourceController,
  GetAll,
  GetOneById,
  PostOne,
  UpdateOne,
  DeleteOne,
  SetRelation,
  UnsetRelation,
  AddRelation,
  RemoveRelation,
  PostBody,
  UpdateBody,
  QueryObject,
  ParamId,
} from '@ae/core/rest';
import { CreateTaskDto, UpdateTaskDto } from '@ae/models/inventory/task';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { TaskViewService } from './task-view.service';

@ResourceController()
export class TaskViewController {
  constructor(private readonly service: TaskViewService) {}

  @GetAll()
  findTasks(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findTaskByIdTask(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
