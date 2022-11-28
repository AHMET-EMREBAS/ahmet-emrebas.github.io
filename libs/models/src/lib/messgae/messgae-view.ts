import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Messgae } from './messgae';

import { User } from '../user';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('messgae.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY messgae.id)`, 'index')

      .addSelect('messgae.title', 'title')

      .addSelect('messgae.message', 'message')

      .addSelect('user.username', 'username')

      .addSelect('user.username', 'username')

      .from(Messgae, 'messgae')

      .leftJoin(User, 'user', 'user.id = messgae.userId')

      .leftJoin(User, 'user', 'user.id = messgae.userId');
  },
})
export class MessgaeView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  message: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  username: string;
}
