import { DataSource } from 'typeorm';
import { Transaction } from './Transaction';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('transaction.id', 'id')
      .addSelect('transaction.id', 'label')
      .from(Transaction, 'transaction');
  },
})
export class TransactionOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
