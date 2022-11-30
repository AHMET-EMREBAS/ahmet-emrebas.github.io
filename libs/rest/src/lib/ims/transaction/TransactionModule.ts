import { Cart } from '@ae/models/ims/cart';

import { Transaction, TransactionView } from '@ae/models/ims/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionService } from './TransactionService';
import { TransactionViewService } from './TransactionViewService';
import { TransactionController } from './TransactionController';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionView, Cart])],
  providers: [TransactionService, TransactionViewService],
  controllers: [TransactionController],
})
export class TransactionModule {}
