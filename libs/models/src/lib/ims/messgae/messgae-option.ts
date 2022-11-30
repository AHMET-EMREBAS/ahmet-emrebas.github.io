import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Messgae } from './messgae';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('messgae.id', 'id')
      .addSelect('messgae.title', 'label')
      .from(Messgae, 'messgae');
  },
})
export class MessgaeOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
