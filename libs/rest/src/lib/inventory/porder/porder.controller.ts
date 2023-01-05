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
import { PorderService } from './porder.service';

@ResourceController()
export class PorderController {
  constructor(private readonly service: PorderService) {}

  @PostOne()
  saveOnePorder(@PostBody() body: CreatePorderDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOnePorder(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOnePorder(@ParamId() id: number, @UpdateBody() body: UpdatePorderDto) {
    return this.service.update(id, body);
  }

  @SetRelation('store')
  setStore(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'store' });
  }

  @UnsetRelation('store')
  unsetStore(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'store' });
  }

  @SetRelation('product')
  setProduct(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'product' });
  }

  @UnsetRelation('product')
  unsetProduct(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'product' });
  }

  @SetRelation('customer')
  setCustomer(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'customer' });
  }

  @UnsetRelation('customer')
  unsetCustomer(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'customer' });
  }

  @SetRelation('employee')
  setEmployee(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'employee' });
  }

  @UnsetRelation('employee')
  unsetEmployee(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'employee' });
  }
}
