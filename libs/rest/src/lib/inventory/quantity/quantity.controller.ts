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
import { QuantityService } from './quantity.service';

@ResourceController()
export class QuantityController {
  constructor(private readonly service: QuantityService) {}

  @PostOne()
  saveOneQuantity(@PostBody() body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneQuantity(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneQuantity(
    @ParamId() id: number,
    @UpdateBody() body: UpdateQuantityDto
  ) {
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

  @SetRelation('store')
  setStore(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'store' });
  }

  @UnsetRelation('store')
  unsetStore(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'store' });
  }
}
