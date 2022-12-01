import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Transaction } from './Transaction';

import { Cart } from '../cart/Cart';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('transaction.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY transaction.id)`, 'index')

      .addSelect('transaction.complete', 'complete')

      .addSelect('cart.id', 'cartId')

      .from(Transaction, 'transaction')

      .leftJoin(Cart, 'cart', 'cart.id = transaction.cartId');
  },
})
export class TransactionView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  complete: boolean;

  @ViewColumn()
  cartId: number;
}
