import { DataSource } from 'typeorm';
import { Price } from './Price';

import { ViewEntity, ViewColumn } from '@ae/core';

import { Pricelevel } from '../pricelevel/Pricelevel';

import { Product } from '../product/Product';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY price.id)`, 'index')

      .addSelect('price.price', 'price')

      .addSelect('price.cost', 'cost')

      .addSelect('pricelevel.name', 'pricelevel')

      .addSelect('product.name', 'product')

      .from(Price, 'price')

      .leftJoin(Pricelevel, 'pricelevel', 'pricelevel.id = price.pricelevelId')

      .leftJoin(Product, 'product', 'product.id = price.productId');
  },
})
export class PriceView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  pricelevel: string;

  @ViewColumn()
  product: string;
}
