import { DataSource } from 'typeorm';
import { Cart } from './Cart';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('cart.id', 'id')
      .addSelect('cart.name', 'label')
      .from(Cart, 'cart');
  },
})
export class CartOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
