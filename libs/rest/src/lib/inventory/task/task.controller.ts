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
import { TaskService } from './task.service';

@ResourceController()
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @PostOne()
  saveOneTask(@PostBody() body: CreateTaskDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneTask(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneTask(@ParamId() id: number, @UpdateBody() body: UpdateTaskDto) {
    return this.service.update(id, body);
  }

  @SetRelation('employee')
  setEmployee(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'employee' });
  }

  @UnsetRelation('employee')
  unsetEmployee(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'employee' });
  }
}
