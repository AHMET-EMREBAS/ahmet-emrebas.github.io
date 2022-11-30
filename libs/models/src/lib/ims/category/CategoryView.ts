import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Category } from './Category';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY category.id)`, 'index')

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
  name: string;
}
