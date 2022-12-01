import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Sprint } from './Sprint';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sprint.id', 'id')
      .addSelect('sprint.name', 'label')
      .from(Sprint, 'sprint');
  },
})
export class SprintOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
