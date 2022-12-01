import { Cart } from '@ae/models/pms/cart/Cart';

import { Transaction } from '@ae/models/pms/transaction/Transaction';
import { TransactionView } from '@ae/models/pms/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/pms/transaction/TransactionOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';
import { TransactionController } from './TransactionController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Transaction,
      TransactionView,
      TransactionOptionView,

      Cart,
    ]),
  ],
  providers: [TransactionService, TransactionViewService],
  controllers: [TransactionController],
})
export class TransactionModule {}
