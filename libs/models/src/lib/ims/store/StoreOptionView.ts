import { DataSource } from 'typeorm';
import { Store } from './Store';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect('store.name', 'label')
      .from(Store, 'store');
  },
})
export class StoreOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
