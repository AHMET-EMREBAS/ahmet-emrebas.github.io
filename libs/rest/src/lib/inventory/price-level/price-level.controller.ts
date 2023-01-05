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
import { PriceLevelService } from './price-level.service';

@ResourceController()
export class PriceLevelController {
  constructor(private readonly service: PriceLevelService) {}

  @PostOne()
  saveOnePriceLevel(@PostBody() body: CreatePriceLevelDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOnePriceLevel(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOnePriceLevel(
    @ParamId() id: number,
    @UpdateBody() body: UpdatePriceLevelDto
  ) {
    return this.service.update(id, body);
  }
}
