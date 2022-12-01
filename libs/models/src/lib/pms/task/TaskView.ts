import { DataSource } from 'typeorm';
import { Task } from './Task';

import { ViewEntity, ViewColumn } from '@ae/core';

import { User } from '../user/User';

import { Tag } from '../tag/Tag';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('task.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY task.id)`, 'index')

      .addSelect('task.name', 'name')

      .addSelect('task.description', 'description')

      .addSelect('task.status', 'status')

      .addSelect('user.username', 'user')

      .addSelect('tag.tag', 'tag')

      .from(Task, 'task')

      .leftJoin(User, 'user', 'user.id = task.userId')

      .leftJoin(Tag, 'tag', 'tag.id = task.tagId');
  },
})
export class TaskView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  status: string;

  @ViewColumn()
  user: string;

  @ViewColumn()
  tag: string;
}
