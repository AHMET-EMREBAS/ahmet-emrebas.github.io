import { DataSource } from 'typeorm';
import { Category } from './Category';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('category.id', 'id')
      .addSelect('category.name', 'label')
      .from(Category, 'category');
  },
})
export class CategoryOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
