import { DataSource } from 'typeorm';
import { Pricelevel } from './Pricelevel';

import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('pricelevel.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY pricelevel.id)`, 'index')

      .addSelect('pricelevel.name', 'name')

      .from(Pricelevel, 'pricelevel');
  },
})
export class PricelevelView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;
}
