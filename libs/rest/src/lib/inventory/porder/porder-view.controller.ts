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
import { CreatePorderDto, UpdatePorderDto } from '@ae/models/inventory/porder';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { PorderViewService } from './porder-view.service';

@ResourceController()
export class PorderViewController {
  constructor(private readonly service: PorderViewService) {}

  @GetAll()
  findPorders(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findPorderByIdPorder(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
