import { DataSource, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()

      .addSelect('sample.id', 'id')

      .from(Sample, 'sample')
      .leftJoin(Sample, 's', 'sample.id = sample.id');
  },
})
export class Sample {}
