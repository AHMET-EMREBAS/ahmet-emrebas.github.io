import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Permission } from './permission';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('permission.id', 'id')
      .addSelect('permission.description', 'label')
      .from(Permission, 'permission');
  },
})
export class PermissionOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
