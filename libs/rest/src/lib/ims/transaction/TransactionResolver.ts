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

  @GRead(Transaction)
  findTransaction(
    @Args('query') query: QueryDto<Transaction & TransactionView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Transaction)
  findByTransactionId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Transaction)
  saveTransaction(@Args('transaction') body: CreateTransactionDto) {
    return this.service.save(body);
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
  optionsTransaction(
    @Args('query') query: QueryDto<Transaction & TransactionView>
  ) {
    return this.optionViewService.find(query);
  }
}
