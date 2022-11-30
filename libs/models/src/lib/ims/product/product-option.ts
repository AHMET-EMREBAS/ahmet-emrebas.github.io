import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('product.id', 'id')
      .addSelect('product.name', 'label')
      .from(Product, 'product');
  },
})
export class ProductOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
