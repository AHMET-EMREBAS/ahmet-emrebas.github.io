import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Payment } from './payment.entity';

import { Porder } from '../porder';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('payment.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY payment.id)`, 'index')

      .addSelect('payment.uuid', 'uuid')
      .addSelect('payment.createdAt', 'createdAt')
      .addSelect('payment.updatedAt', 'updatedAt')
      .addSelect('payment.deletedAt', 'deletedAt')
      .addSelect('payment.active', 'active')

      .addSelect('porder.quantity', 'quantity')

      .from(Payment, 'payment')

      .leftJoin(Porder, 'porder', 'porder.id = payment.porderId');
  },
})
export class PaymentView {
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
  quantity: string;
}
