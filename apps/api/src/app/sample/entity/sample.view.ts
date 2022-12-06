import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Sample } from './sample.entity';

@ViewEntity({
  expression: (datasource: DataSource) => {
    return datasource
      .createQueryBuilder()
      .select('sample.id', 'id')
      .addSelect('sample.name', 'name')
      .from(Sample, 'sample');
  },
})
export class SampleView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;
}
