import { DataSource } from 'typeorm';
import { Price } from './Price';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect('price.price', 'label')
      .from(Price, 'price');
  },
})
export class PriceOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
