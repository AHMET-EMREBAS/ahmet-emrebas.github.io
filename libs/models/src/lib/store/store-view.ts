import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Store } from './store';

import { Pricelevel } from '../pricelevel';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('store.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY store.id)`, 'index')

      .addSelect('store.name', 'name')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Store, 'store')

      .leftJoin(Pricelevel, 'pricelevel', 'pricelevel.id = store.pricelevelId');
  },
})
export class StoreView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  pricelevel: string;
}
