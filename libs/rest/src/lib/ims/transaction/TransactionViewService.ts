import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionView } from '@ae/models/ims/transaction';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionViewService extends ResourceViewService<TransactionView> {
  constructor(
    @InjectRepository(TransactionView)
    transactionViewRepo: Repository<TransactionView>
  ) {
    super(transactionViewRepo);
  }
}
