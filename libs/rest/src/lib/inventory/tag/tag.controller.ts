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
import { TagService } from './tag.service';

@ResourceController()
export class TagController {
  constructor(private readonly service: TagService) {}

  @PostOne()
  saveOneTag(@PostBody() body: CreateTagDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneTag(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneTag(@ParamId() id: number, @UpdateBody() body: UpdateTagDto) {
    return this.service.update(id, body);
  }
}
