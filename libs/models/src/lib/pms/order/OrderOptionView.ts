import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Order } from './Order';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('order.id', 'id')
      .addSelect('order.id', 'label')
      .from(Order, 'order');
  },
})
export class OrderOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
