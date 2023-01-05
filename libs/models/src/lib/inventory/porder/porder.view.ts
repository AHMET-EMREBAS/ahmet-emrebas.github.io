import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Porder } from './porder.entity';

import { Store } from '../store';
import { Product } from '../product';
import { Customer } from '../customer';
import { Employee } from '../employee';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('porder.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY porder.id)`, 'index')

      .addSelect('porder.uuid', 'uuid')
      .addSelect('porder.createdAt', 'createdAt')
      .addSelect('porder.updatedAt', 'updatedAt')
      .addSelect('porder.deletedAt', 'deletedAt')
      .addSelect('porder.active', 'active')

      .addSelect('porder.quantity', 'quantity')

      .addSelect('store.name', 'storeName')
      .addSelect('product.name', 'name')
      .addSelect('product.barcode', 'barcode')
      .addSelect('customer.username', 'customer')
      .addSelect('employee.id', 'eid')

      .from(Porder, 'porder')

      .leftJoin(Store, 'store', 'store.id = porder.storeId')
      .leftJoin(Product, 'product', 'product.id = porder.productId')
      .leftJoin(Customer, 'customer', 'customer.id = porder.customerId')
      .leftJoin(Employee, 'employee', 'employee.id = porder.employeeId');
  },
})
export class PorderView {
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
