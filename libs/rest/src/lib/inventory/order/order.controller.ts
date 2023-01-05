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
import { CreateOrderDto, UpdateOrderDto } from '@ae/models/inventory/order';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { OrderService } from './order.service';

@ResourceController()
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @PostOne()
  saveOneOrder(@PostBody() body: CreateOrderDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneOrder(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneOrder(@ParamId() id: number, @UpdateBody() body: UpdateOrderDto) {
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
