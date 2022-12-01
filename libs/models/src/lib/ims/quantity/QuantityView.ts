import { DataSource } from 'typeorm';
import { Quantity } from './Quantity';

import { ViewEntity, ViewColumn } from '@ae/core';

import { Product } from '../product/Product';

import { Store } from '../store/Store';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY quantity.id)`, 'index')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('product.name', 'product')

      .addSelect('store.name', 'store')

      .from(Quantity, 'quantity')

      .leftJoin(Product, 'product', 'product.id = quantity.productId')

      .leftJoin(Store, 'store', 'store.id = quantity.storeId');
  },
})
export class QuantityView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  product: string;

  @ViewColumn()
  store: string;
}
