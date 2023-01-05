import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import {
  Transaction,
  CreateTransactionDto,
} from '@ae/models/inventory/transaction';

@Injectable()
export class TransactionService extends ResourceService<CreateTransactionDto> {
  constructor(
    @InjectRepository(Transaction) __repo: Repository<CreateTransactionDto>
  ) {
    super(__repo);
  }
}
