import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Permission } from './permission.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('permission.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY permission.id)`, 'index')

      .addSelect('permission.uuid', 'uuid')
      .addSelect('permission.createdAt', 'createdAt')
      .addSelect('permission.updatedAt', 'updatedAt')
      .addSelect('permission.deletedAt', 'deletedAt')
      .addSelect('permission.active', 'active')

      .addSelect('permission.name', 'name')

      .from(Permission, 'permission');
  },
})
export class PermissionView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  uuid: string;

  @ViewColumn()
  name: string;
}
