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
import { TransactionViewService } from './transaction-view.service';

@ResourceController()
export class TransactionViewController {
  constructor(private readonly service: TransactionViewService) {}

  @GetAll()
  findTransactions(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findTransactionByIdTransaction(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
