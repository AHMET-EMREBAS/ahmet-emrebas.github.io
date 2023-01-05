import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Order } from './order.entity';

import { Store } from '../store';
import { Product } from '../product';
import { Customer } from '../customer';
import { Employee } from '../employee';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('order.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY order.id)`, 'index')

      .addSelect('order.uuid', 'uuid')
      .addSelect('order.createdAt', 'createdAt')
      .addSelect('order.updatedAt', 'updatedAt')
      .addSelect('order.deletedAt', 'deletedAt')
      .addSelect('order.active', 'active')

      .addSelect('order.quantity', 'quantity')

      .addSelect('store.name', 'storeName')
      .addSelect('product.name', 'name')
      .addSelect('product.barcode', 'barcode')
      .addSelect('customer.username', 'customer')
      .addSelect('employee.id', 'eid')

      .from(Order, 'order')

      .leftJoin(Store, 'store', 'store.id = order.storeId')
      .leftJoin(Product, 'product', 'product.id = order.productId')
      .leftJoin(Customer, 'customer', 'customer.id = order.customerId')
      .leftJoin(Employee, 'employee', 'employee.id = order.employeeId');
  },
})
export class OrderView {
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
  quantity: number;

  @ViewColumn()
  storeName: string;

  @ViewColumn()
  name: string;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  customer: string;

  @ViewColumn()
  eid: number;
}
