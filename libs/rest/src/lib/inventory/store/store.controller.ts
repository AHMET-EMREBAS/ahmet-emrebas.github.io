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
import { StoreService } from './store.service';

@ResourceController()
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @PostOne()
  saveOneStore(@PostBody() body: CreateStoreDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneStore(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneStore(@ParamId() id: number, @UpdateBody() body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @SetRelation('price-level')
  setPriceLevel(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'priceLevel' });
  }

  @UnsetRelation('price-level')
  unsetPriceLevel(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'priceLevel' });
  }
}
