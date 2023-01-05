import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Role } from './role.entity';

import { Permission } from '../permission';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('role.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY role.id)`, 'index')

      .addSelect('role.uuid', 'uuid')
      .addSelect('role.createdAt', 'createdAt')
      .addSelect('role.updatedAt', 'updatedAt')
      .addSelect('role.deletedAt', 'deletedAt')
      .addSelect('role.active', 'active')

      .addSelect('role.name', 'name')

      .addSelect('permission.name', 'permission')

      .from(Role, 'role')

      .leftJoin(Permission, 'permission', 'permission.id = role.permissionId');
  },
})
export class RoleView {
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

  @ViewColumn()
  permission: string;
}
