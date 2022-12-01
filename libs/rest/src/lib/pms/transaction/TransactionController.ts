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
} from '@ae/core';

import { Transaction } from '@ae/models/pms/transaction/Transaction';
import { TransactionView } from '@ae/models/pms/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/pms/transaction/TransactionOptionView';
import { CreateTransactionDto } from '@ae/models/pms/transaction/dto/CreateTransactionDto';
import { UpdateTransactionDto } from '@ae/models/pms/transaction/dto/UpdateTransactionDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';

@ApiTags('pms | Transaction')
@Controller('pms/transaction')
export class TransactionController {
  constructor(
    private readonly service: TransactionService,
    private readonly viewService: TransactionViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Transaction & TransactionView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateTransactionDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateTransactionDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('cart')
  setCart(@ParamId() id: number, @ParamRid() cartId: number) {
    return this.service.set(id, cartId, 'cart');
  }

  @Unset('cart')
  unsetCart(@ParamId() id: number) {
    return this.service.unset(id, 'cart');
  }

  @Count()
  count() {
    return this.service.count();
  }
}
