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
import { CreateStoreDto, UpdateStoreDto } from '@ae/models/inventory/store';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { StoreViewService } from './store-view.service';

@ResourceController()
export class StoreViewController {
  constructor(private readonly service: StoreViewService) {}

  @GetAll()
  findStores(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findStoreByIdStore(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
