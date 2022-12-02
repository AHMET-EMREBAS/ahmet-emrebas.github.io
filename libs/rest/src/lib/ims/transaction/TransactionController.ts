import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { Transaction } from '@ae/models/ims/transaction/Transaction';
import { TransactionView } from '@ae/models/ims/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/ims/transaction/TransactionOptionView';
import { CreateTransactionDto } from '@ae/models/ims/transaction/dto/CreateTransactionDto';
import { UpdateTransactionDto } from '@ae/models/ims/transaction/dto/UpdateTransactionDto';
import { QueryTransactionDto } from '@ae/models/ims/transaction/dto/QueryTransactionDto';

import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';
import { TransactionOptionViewService } from './TransactionOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('ims/transaction')
export class TransactionController {
  constructor(
    private readonly service: TransactionService,
    private readonly viewService: TransactionViewService,
    private readonly optionViewService: TransactionOptionViewService
  ) {}

  @Read()
  findTransaction(
    @Query() query: QueryDto<Transaction & TransactionView>,
    @Query() where: QueryTransactionDto
  ) {
    if (query.view === true) {
      return this.viewService.find({ ...query, where });
    }
    return this.service.find({ ...query, where });
  }

  @ReadById()
  findByTransactionId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveTransaction(@Body() body: CreateTransactionDto) {
    return this.service.save(body);
  }

  @Update()
  updateTransaction(@ParamId() id: number, @Body() body: UpdateTransactionDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTransaction(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('cart')
  setTransactionCart(@ParamId() id: number, @ParamRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetTransactionCart(@ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Count()
  countTransaction() {
    return this.service.count();
  }

  @Options()
  optionsTransaction(@Query() query: QueryDto<Transaction & TransactionView>) {
    return this.optionViewService.find(query);
  }
}
