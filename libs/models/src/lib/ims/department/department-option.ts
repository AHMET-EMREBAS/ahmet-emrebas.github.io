import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Department } from './department';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('department.id', 'id')
      .addSelect('department.name', 'label')
      .from(Department, 'department');
  },
})
export class DepartmentOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
