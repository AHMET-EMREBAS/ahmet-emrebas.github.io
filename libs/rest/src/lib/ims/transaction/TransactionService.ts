import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '@ae/models/ims/transaction/Transaction';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService extends ResourceService<Transaction> {
  constructor(
    @InjectRepository(Transaction) transactionRepo: Repository<Transaction>
  ) {
    super(transactionRepo);
  }
}
