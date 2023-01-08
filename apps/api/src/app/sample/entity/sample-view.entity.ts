import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Sample } from './sample.entity';

@ViewEntity({
  expression(ds: DataSource) {
    return ds
      .createQueryBuilder()
      .addSelect('sample.id', 'id')
      .addSelect('sample.name', 'name')
      .from(Sample, 'sample');
  },
})
export class SampleView {
  @ViewColumn() id: number;

  @ViewColumn() name: string;
}
