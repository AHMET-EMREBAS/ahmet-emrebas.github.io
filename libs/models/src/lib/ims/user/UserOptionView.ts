import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { User } from './User';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('user.id', 'id')
      .addSelect('user.fullName', 'label')
      .from(User, 'user');
  },
})
export class UserOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
