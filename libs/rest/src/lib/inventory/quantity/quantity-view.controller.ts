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
  CreateQuantityDto,
  UpdateQuantityDto,
} from '@ae/models/inventory/quantity';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { QuantityViewService } from './quantity-view.service';

@ResourceController()
export class QuantityViewController {
  constructor(private readonly service: QuantityViewService) {}

  @GetAll()
  findQuantitys(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findQuantityByIdQuantity(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
