import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Category } from './category.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY category.id)`, 'index')

      .addSelect('category.uuid', 'uuid')
      .addSelect('category.createdAt', 'createdAt')
      .addSelect('category.updatedAt', 'updatedAt')
      .addSelect('category.deletedAt', 'deletedAt')
      .addSelect('category.active', 'active')

      .addSelect('category.name', 'name')

      .from(Category, 'category');
  },
})
export class CategoryView {
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
