import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionOptionView } from '@ae/models/ims/transaction/TransactionOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionOptionViewService extends ResourceViewService<TransactionOptionView> {
  constructor(
    @InjectRepository(TransactionOptionView)
    transactionViewRepo: Repository<TransactionOptionView>
  ) {
    super(transactionViewRepo);
  }
}
