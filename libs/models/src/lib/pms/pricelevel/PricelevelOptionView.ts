import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Pricelevel } from './Pricelevel';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('pricelevel.id', 'id')
      .addSelect('pricelevel.name', 'label')
      .from(Pricelevel, 'pricelevel');
  },
})
export class PricelevelOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
