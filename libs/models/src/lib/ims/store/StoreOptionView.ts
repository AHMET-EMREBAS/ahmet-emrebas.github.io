import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Store } from './Store';

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
