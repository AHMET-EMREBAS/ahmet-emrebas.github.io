import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product.entity';

import { Category } from '../category';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY product.id)`, 'index')

      .addSelect('product.uuid', 'uuid')
      .addSelect('product.createdAt', 'createdAt')
      .addSelect('product.updatedAt', 'updatedAt')
      .addSelect('product.deletedAt', 'deletedAt')
      .addSelect('product.active', 'active')

      .addSelect('category.name', 'category')

      .from(Product, 'product')

      .leftJoin(Category, 'category', 'category.id = product.categoryId');
  },
})
export class ViewProduct {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  uuid: string;

  @ViewColumn()
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  upc: string;

  @ViewColumn()
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  category: string;
}
