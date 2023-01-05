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
  CreateClockinDto,
  UpdateClockinDto,
} from '@ae/models/inventory/clockin';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { ClockinViewService } from './clockin-view.service';

@ResourceController()
export class ClockinViewController {
  constructor(private readonly service: ClockinViewService) {}

  @GetAll()
  findClockins(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findClockinByIdClockin(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
