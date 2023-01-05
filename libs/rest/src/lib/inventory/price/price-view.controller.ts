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
import { CreatePriceDto, UpdatePriceDto } from '@ae/models/inventory/price';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { PriceViewService } from './price-view.service';

@ResourceController()
export class PriceViewController {
  constructor(private readonly service: PriceViewService) {}

  @GetAll()
  findPrices(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findPriceByIdPrice(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
