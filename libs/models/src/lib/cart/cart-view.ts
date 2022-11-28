import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Cart } from './cart';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('cart.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY cart.id)`, 'index')

      .addSelect('cart.name', 'name')

      .from(Cart, 'cart');
  },
})
export class CartView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;
}
