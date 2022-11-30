import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Transaction } from './transaction';

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
