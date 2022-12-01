import { Cart } from '@ae/models/ims/cart/Cart';

import { Transaction } from '@ae/models/ims/transaction/Transaction';
import { TransactionView } from '@ae/models/ims/transaction/TransactionView';
import { TransactionOptionView } from '@ae/models/ims/transaction/TransactionOptionView';

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
  providers: [
    TransactionService,
    TransactionViewService,
    TransactionController,
  ],
  controllers: [TransactionController],
})
export class TransactionModule {}
