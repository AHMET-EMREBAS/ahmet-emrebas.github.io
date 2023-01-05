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
import { OrderViewService } from './order-view.service';

@ResourceController()
export class OrderViewController {
  constructor(private readonly service: OrderViewService) {}

  @GetAll()
  findOrders(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findOrderByIdOrder(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
