import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Customer } from './Customer';

import { Permission } from '../permission/Permission';

import { Pricelevel } from '../pricelevel/Pricelevel';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('customer.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY customer.id)`, 'index')

      .addSelect('customer.fullName', 'fullName')

      .addSelect('customer.username', 'username')

      .addSelect('customer.password', 'password')

      .addSelect('customer.phone', 'phone')

      .addSelect('permission.name', 'permission')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(Customer, 'customer')

      .leftJoin(
        Permission,
        'permission',
        'permission.id = customer.permissionId'
      )

      .leftJoin(
        Pricelevel,
        'pricelevel',
        'pricelevel.id = customer.pricelevelId'
      );
  },
})
export class CustomerView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  fullName: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  permission: string;

  @ViewColumn()
  pricelevel: string;
}
