import { ViewEntity, ViewColumn, DataSource } from 'typeorm';
import { Operation } from './operation.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()

      .addSelect('Operation.id', 'id')
      .addSelect('ROW_NUMBER () OVER (ORDER BY Operation.id)', 'index')

      .addSelect('Operation.name', 'name')

      .from(Operation, 'Operation');
  },
})
export class OperationView {
  @ViewColumn() id: number;
  @ViewColumn() index: number;

  @ViewColumn()
  name: string;
}
