import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Department } from './department.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('department.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY department.id)`, 'index')

      .addSelect('department.uuid', 'uuid')
      .addSelect('department.createdAt', 'createdAt')
      .addSelect('department.updatedAt', 'updatedAt')
      .addSelect('department.deletedAt', 'deletedAt')
      .addSelect('department.active', 'active')

      .addSelect('department.name', 'name')

      .from(Department, 'department');
  },
})
export class DepartmentView {
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
