import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Message } from './Message';

import { User } from '../user/User';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('message.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY message.id)`, 'index')

      .addSelect('message.title', 'title')

      .addSelect('message.message', 'message')

      .addSelect('user.username', 'to')

      .addSelect('user.username', 'from')

      .from(Message, 'message')

      .leftJoin(User, 'user', 'user.id = message.userId')

      .leftJoin(User, 'user', 'user.id = message.userId');
  },
})
export class MessageView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  message: string;

  @ViewColumn()
  to: string;

  @ViewColumn()
  from: string;
}
