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
import {
  CreateCommentDto,
  UpdateCommentDto,
} from '@ae/models/inventory/comment';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { CommentService } from './comment.service';

@ResourceController()
export class CommentController {
  constructor(private readonly service: CommentService) {}

  @PostOne()
  saveOneComment(@PostBody() body: CreateCommentDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneComment(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneComment(
    @ParamId() id: number,
    @UpdateBody() body: UpdateCommentDto
  ) {
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

  @SetRelation('task')
  setTask(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'task' });
  }

  @UnsetRelation('task')
  unsetTask(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'task' });
  }
}
