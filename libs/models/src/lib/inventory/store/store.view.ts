import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Store } from './store.entity';

import { PriceLevel } from '../price-level';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY store.id)`, 'index')

      .addSelect('store.uuid', 'uuid')
      .addSelect('store.createdAt', 'createdAt')
      .addSelect('store.updatedAt', 'updatedAt')
      .addSelect('store.deletedAt', 'deletedAt')
      .addSelect('store.active', 'active')

      .addSelect('store.name', 'name')

      .addSelect('priceLevel.name', 'priceLevel')

      .from(Store, 'store')

      .leftJoin(PriceLevel, 'priceLevel', 'priceLevel.id = store.priceLevelId');
  },
})
export class StoreView {
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
  name: string;

  @ViewColumn()
  priceLevel: string;
}
