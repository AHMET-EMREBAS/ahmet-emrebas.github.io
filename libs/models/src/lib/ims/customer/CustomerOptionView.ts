import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Customer } from './Customer';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('customer.id', 'id')
      .addSelect('customer.fullName', 'label')
      .from(Customer, 'customer');
  },
})
export class CustomerOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
