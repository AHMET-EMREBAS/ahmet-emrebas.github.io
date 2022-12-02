import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Transaction } from '@ae/models/ims/transaction/Transaction';
import { TransactionView } from '@ae/models/ims/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/ims/transaction/TransactionOptionView';
import { CreateTransactionDto } from '@ae/models/ims/transaction/dto/CreateTransactionDto';
import { UpdateTransactionDto } from '@ae/models/ims/transaction/dto/UpdateTransactionDto';
import { ReadTransactionDto } from '@ae/models/ims/transaction/dto/ReadTransactionDto';
import { QueryTransactionDto } from '@ae/models/ims/transaction/dto/QueryTransactionDto';

import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';
import { TransactionOptionViewService } from './TransactionOptionViewService';

@Resolver(Transaction)
export class TransactionResolver {
  constructor(
    private readonly service: TransactionService,
    private readonly viewService: TransactionViewService,
    private readonly optionViewService: TransactionOptionViewService
  ) {}

  @GRead(ReadTransactionDto)
  findTransactions(
    @Args('query', { nullable: true }) query: QueryDto<Transaction>,
    @Args('where', { nullable: true }) where: QueryTransactionDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(TransactionView)
  viewTransactions(
    @Args('query', { nullable: true }) query: QueryDto<TransactionView>,
    @Args('where', { nullable: true }) where: QueryTransactionDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadTransactionDto)
  findByTransactionId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(TransactionView)
  viewByTransactionId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadTransactionDto)
  saveTransaction(@Args('transaction') body: CreateTransactionDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadTransactionDto)
  saveTransactions(
    @Args('transactions', { type: () => [CreateTransactionDto] })
    body: CreateTransactionDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateTransaction(
    @ArgId() id: number,
    @Args('transaction') body: UpdateTransactionDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteTransaction(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('cart')
  setTransactionCart(@ArgId() id: number, @ArgRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @GUnset('cart')
  unsetTransactionCart(@ArgId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @GCount()
  countTransaction() {
    return this.service.count();
  }

  @GOptions()
  optionsTransaction(@Args('query') query: QueryDto<TransactionOptionView>) {
    return this.optionViewService.find(query);
  }
}
