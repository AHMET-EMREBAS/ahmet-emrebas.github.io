import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Customer } from './customer.entity';

import { PriceLevel } from '../price-level';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('customer.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY customer.id)`, 'index')

      .addSelect('customer.uuid', 'uuid')
      .addSelect('customer.createdAt', 'createdAt')
      .addSelect('customer.updatedAt', 'updatedAt')
      .addSelect('customer.deletedAt', 'deletedAt')
      .addSelect('customer.active', 'active')

      .addSelect('customer.type', 'type')
      .addSelect('customer.username', 'username')
      .addSelect('customer.password', 'password')
      .addSelect('customer.firstName', 'firstName')
      .addSelect('customer.lastName', 'lastName')
      .addSelect('customer.phone', 'phone')

      .addSelect('priceLevel.name', 'priceLevel')

      .from(Customer, 'customer')

      .leftJoin(
        PriceLevel,
        'priceLevel',
        'priceLevel.id = customer.priceLevelId'
      );
  },
})
export class CustomerView {
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
  type: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  firstName: string;

  @ViewColumn()
  lastName: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  priceLevel: string;
}
