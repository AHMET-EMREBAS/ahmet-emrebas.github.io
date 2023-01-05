import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Price } from './price.entity';

import { Product } from '../product';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY price.id)`, 'index')

      .addSelect('price.uuid', 'uuid')
      .addSelect('price.createdAt', 'createdAt')
      .addSelect('price.updatedAt', 'updatedAt')
      .addSelect('price.deletedAt', 'deletedAt')
      .addSelect('price.active', 'active')

      .addSelect('price.price', 'price')
      .addSelect('price.cost', 'cost')

      .addSelect('product.barcode', 'barcode')
      .addSelect('product.name', 'name')
      .addSelect('priceLevel.name', 'priceLevel')

      .from(Price, 'price')

      .leftJoin(Product, 'product', 'product.id = price.productId')
      .leftJoin(PriceLevel, 'priceLevel', 'priceLevel.id = price.priceLevelId');
  },
})
export class PriceView {
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
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  name: string;

  @ViewColumn()
  priceLevel: string;
}
