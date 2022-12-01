import { DataSource } from 'typeorm';
import { Permission } from './Permission';
import { ViewEntity, ViewColumn } from '@ae/core';

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
