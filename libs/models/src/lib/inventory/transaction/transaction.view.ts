import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Transaction } from './transaction.entity';

import { Order } from '../order';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('transaction.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY transaction.id)`, 'index')

      .addSelect('transaction.uuid', 'uuid')
      .addSelect('transaction.createdAt', 'createdAt')
      .addSelect('transaction.updatedAt', 'updatedAt')
      .addSelect('transaction.deletedAt', 'deletedAt')
      .addSelect('transaction.active', 'active')

      .from(Transaction, 'transaction')

      .leftJoin(Order, 'order', 'order.id = transaction.orderId');
  },
})
export class TransactionView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  uuid: string;
}
