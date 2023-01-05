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
import { CreateTagDto, UpdateTagDto } from '@ae/models/inventory/tag';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { TagViewService } from './tag-view.service';

@ResourceController()
export class TagViewController {
  constructor(private readonly service: TagViewService) {}

  @GetAll()
  findTags(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findTagByIdTag(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
