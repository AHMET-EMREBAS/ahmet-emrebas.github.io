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
import { CommentViewService } from './comment-view.service';

@ResourceController()
export class CommentViewController {
  constructor(private readonly service: CommentViewService) {}

  @GetAll()
  findComments(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findCommentByIdComment(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
