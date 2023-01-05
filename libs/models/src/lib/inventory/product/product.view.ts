import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Product } from './product.entity';

import { Category } from '../category';
import { Department } from '../department';

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

      .addSelect('product.name', 'name')
      .addSelect('product.price', 'price')
      .addSelect('product.cost', 'cost')
      .addSelect('product.quantity', 'quantity')
      .addSelect('product.barcode', 'barcode')

      .addSelect('category.name', 'category')
      .addSelect('department.name', 'department')

      .from(Product, 'product')

      .leftJoin(Category, 'category', 'category.id = product.categoryId')
      .leftJoin(
        Department,
        'department',
        'department.id = product.departmentId'
      );
  },
})
export class ProductView {
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
  price: number;

  @ViewColumn()
  cost: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  category: string;

  @ViewColumn()
  department: string;
}
