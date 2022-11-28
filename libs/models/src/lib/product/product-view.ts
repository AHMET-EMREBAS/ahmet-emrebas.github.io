import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product';

import { Category } from '../category';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY product.id)`, 'index')

      .addSelect('product.name', 'name')

      .addSelect('product.description', 'description')

      .addSelect('product.barcode', 'barcode')

      .addSelect('product.price', 'price')

      .addSelect('product.cost', 'cost')

      .addSelect('category.name', 'category')

      .from(Product, 'product')

      .leftJoin(Category, 'category', 'category.id = product.categoryId');
  },
})
export class ProductView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  category: string;
}
