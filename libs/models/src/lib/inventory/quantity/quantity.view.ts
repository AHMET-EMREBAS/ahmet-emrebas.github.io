import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Quantity } from './quantity.entity';

import { Product } from '../product';
import { Store } from '../store';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY quantity.id)`, 'index')

      .addSelect('quantity.uuid', 'uuid')
      .addSelect('quantity.createdAt', 'createdAt')
      .addSelect('quantity.updatedAt', 'updatedAt')
      .addSelect('quantity.deletedAt', 'deletedAt')
      .addSelect('quantity.active', 'active')

      .addSelect('quantity.quantity', 'quantity')

      .addSelect('product.barcode', 'barcode')
      .addSelect('product.name', 'productName')
      .addSelect('store.name', 'name')

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
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  uuid: string;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  productName: string;

  @ViewColumn()
  name: string;
}
