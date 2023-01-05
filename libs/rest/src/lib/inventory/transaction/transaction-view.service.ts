import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { TransactionView } from '@ae/models/inventory/transaction';

@Injectable()
export class TransactionViewService extends ResourceService<TransactionView> {
  constructor(
    @InjectRepository(TransactionView) __repo: Repository<TransactionView>
  ) {
    super(__repo);
  }
}
