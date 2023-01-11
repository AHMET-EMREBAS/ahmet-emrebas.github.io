import { ViewEntity, ViewColumn, DataSource } from 'typeorm';
import { Permission } from './permission.entity';

import { Resource } from '../../resource';

import { Operation } from '../../operation';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()

      .addSelect('Permission.id', 'id')
      .addSelect('ROW_NUMBER () OVER (ORDER BY Permission.id)', 'index')

      .addSelect('Resource.name', 'resourceName')

      .addSelect('Operation.name', 'operationName')

      .from(Permission, 'Permission')

      .leftJoin(Resource, 'Resource', 'Resource.id = Permission.resourceId')

      .leftJoin(
        Operation,
        'Operation',
        'Operation.id = Permission.operationId'
      );
  },
})
export class PermissionView {
  @ViewColumn() id: number;
  @ViewColumn() index: number;

  @ViewColumn()
  resourceName: string;

  @ViewColumn()
  operationName: string;
}
