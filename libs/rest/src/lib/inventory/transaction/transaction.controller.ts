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
  CreateTransactionDto,
  UpdateTransactionDto,
} from '@ae/models/inventory/transaction';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { TransactionService } from './transaction.service';

@ResourceController()
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @PostOne()
  saveOneTransaction(@PostBody() body: CreateTransactionDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneTransaction(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneTransaction(
    @ParamId() id: number,
    @UpdateBody() body: UpdateTransactionDto
  ) {
    return this.service.update(id, body);
  }

  @AddRelation('orders')
  addOrders(options: AddRelationDto) {
    return this.service.add({ ...options, rname: 'orders' });
  }

  @RemoveRelation('orders')
  removeOrders(options: RemoveRelationDto) {
    return this.service.unset({ ...options, rname: 'orders' });
  }
}
