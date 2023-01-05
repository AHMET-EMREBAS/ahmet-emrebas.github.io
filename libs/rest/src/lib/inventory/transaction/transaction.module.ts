import { Module } from '@nestjs/common';
import { Transaction, TransactionView } from '@ae/models/inventory/transaction';
import { TransactionController } from './transaction.controller';
import { TransactionViewController } from './transaction-view.controller';
import { TransactionService } from './transaction.service';
import { TransactionViewService } from './transaction-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from '@ae/models/inventory/order';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionView, Order])],
  controllers: [TransactionController, TransactionViewController],
  providers: [TransactionService, TransactionViewService],
})
export class TransactionModule {}
