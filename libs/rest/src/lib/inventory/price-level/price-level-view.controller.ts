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
  CreatePriceLevelDto,
  UpdatePriceLevelDto,
} from '@ae/models/inventory/price-level';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { PriceLevelViewService } from './price-level-view.service';

@ResourceController()
export class PriceLevelViewController {
  constructor(private readonly service: PriceLevelViewService) {}

  @GetAll()
  findPriceLevels(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findPriceLevelByIdPriceLevel(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
