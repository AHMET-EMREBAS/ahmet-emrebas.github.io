import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Comment } from './comment.entity';

import { Employee } from '../employee';
import { Task } from '../task';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('comment.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY comment.id)`, 'index')

      .addSelect('comment.uuid', 'uuid')
      .addSelect('comment.createdAt', 'createdAt')
      .addSelect('comment.updatedAt', 'updatedAt')
      .addSelect('comment.deletedAt', 'deletedAt')
      .addSelect('comment.active', 'active')

      .addSelect('comment.comment', 'comment')

      .addSelect('employee.id', 'eid')
      .addSelect('employee.firstName', 'firstName')
      .addSelect('employee.lastName', 'lastName')
      .addSelect('task.id', 'taskId')

      .from(Comment, 'comment')

      .leftJoin(Employee, 'employee', 'employee.id = comment.employeeId')
      .leftJoin(Task, 'task', 'task.id = comment.taskId');
  },
})
export class CommentView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  uuid: string;

  @ViewColumn()
  comment: string;

  @ViewColumn()
  eid: string;

  @ViewColumn()
  firstName: string;

  @ViewColumn()
  lastName: string;

  @ViewColumn()
  taskId: string;
}
