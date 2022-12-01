import {
  Add,
  Count,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Transaction } from '@ae/models/ims/transaction/Transaction';
import { TransactionView } from '@ae/models/ims/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/ims/transaction/TransactionOptionView';
import { CreateTransactionDto } from '@ae/models/ims/transaction/dto/CreateTransactionDto';
import { UpdateTransactionDto } from '@ae/models/ims/transaction/dto/UpdateTransactionDto';

import { Body, Delete, Query } from '@nestjs/common';

import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';
import { Args } from '@nestjs/graphql';

@Controller('ims/transaction', Transaction)
export class TransactionController {
  constructor(
    private readonly service: TransactionService,
    private readonly viewService: TransactionViewService
  ) {}

  @Read(Transaction)
  findTransaction(
    @Args('query') @Query() query: QueryDto<Transaction & TransactionView>
  ) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Transaction)
  findByTransactionId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Transaction)
  saveTransaction(@Args('transaction') @Body() body: CreateTransactionDto) {
    return this.service.save(body);
  }

  @Update()
  updateTransaction(
    @ArgId() @ParamId() id: number,
    @Args('transaction') @Body() body: UpdateTransactionDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTransaction(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('cart')
  setTransactionCart(
    @ArgId() @ParamId() id: number,
    @ArgRid() @ParamRid() cartId: number
  ) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetTransactionCart(@ArgId() @ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Count()
  countTransaction() {
    return this.service.count();
  }
}
