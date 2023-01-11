import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Resource } from './resource.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()

      .addSelect('Resource.id', 'id')
      .addSelect('ROW_NUMBER () OVER (ORDER BY Resource.id)', 'index')

      .addSelect('Resource.name', 'name')

      .from(Resource, 'Resource');
  },
})
export class ResourceView {
  @ViewColumn() id: number;
  @ViewColumn() index: number;

  @ViewColumn() name: string;
}
