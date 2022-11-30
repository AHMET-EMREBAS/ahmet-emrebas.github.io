import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Price } from './Price';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('price.id', 'id')
      .addSelect('price.price', 'label')
      .from(Price, 'price');
  },
})
export class PriceOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
