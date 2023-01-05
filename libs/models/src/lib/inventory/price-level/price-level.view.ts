import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { PriceLevel } from './price-level.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('priceLevel.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY priceLevel.id)`, 'index')

      .addSelect('priceLevel.uuid', 'uuid')
      .addSelect('priceLevel.createdAt', 'createdAt')
      .addSelect('priceLevel.updatedAt', 'updatedAt')
      .addSelect('priceLevel.deletedAt', 'deletedAt')
      .addSelect('priceLevel.active', 'active')

      .addSelect('priceLevel.name', 'name')

      .from(PriceLevel, 'priceLevel');
  },
})
export class PriceLevelView {
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
}
