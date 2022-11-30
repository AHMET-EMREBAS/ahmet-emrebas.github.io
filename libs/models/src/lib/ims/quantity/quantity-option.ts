import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Quantity } from './quantity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('quantity.id', 'id')
      .addSelect('quantity.quantity', 'label')
      .from(Quantity, 'quantity');
  },
})
export class QuantityOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
