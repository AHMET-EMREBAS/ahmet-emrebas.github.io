import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Permission } from './permission';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('permission.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY permission.id)`, 'index')

      .addSelect('permission.name', 'name')

      .addSelect('permission.description', 'description')

      .from(Permission, 'permission');
  },
})
export class PermissionView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;
}
