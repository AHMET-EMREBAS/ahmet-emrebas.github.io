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
import { PriceService } from './price.service';

@ResourceController()
export class PriceController {
  constructor(private readonly service: PriceService) {}

  @PostOne()
  saveOnePrice(@PostBody() body: CreatePriceDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOnePrice(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOnePrice(@ParamId() id: number, @UpdateBody() body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @SetRelation('product')
  setProduct(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'product' });
  }

  @UnsetRelation('product')
  unsetProduct(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'product' });
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
