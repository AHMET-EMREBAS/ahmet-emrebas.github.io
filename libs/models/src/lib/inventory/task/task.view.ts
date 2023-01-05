import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Task } from './task.entity';

import { Employee } from '../employee';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('task.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY task.id)`, 'index')

      .addSelect('task.uuid', 'uuid')
      .addSelect('task.createdAt', 'createdAt')
      .addSelect('task.updatedAt', 'updatedAt')
      .addSelect('task.deletedAt', 'deletedAt')
      .addSelect('task.active', 'active')

      .addSelect('task.title', 'title')
      .addSelect('task.description', 'description')
      .addSelect('task.status', 'status')

      .addSelect('employee.id', 'eid')
      .addSelect('employee.firstName', 'firstName')
      .addSelect('employee.lastName', 'lastName')

      .from(Task, 'task')

      .leftJoin(Employee, 'employee', 'employee.id = task.employeeId');
  },
})
export class TaskView {
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
  title: string;

  @ViewColumn()
  description: string;

  @ViewColumn()
  status: string;

  @ViewColumn()
  eid: string;

  @ViewColumn()
  firstName: string;

  @ViewColumn()
  lastName: string;
}
