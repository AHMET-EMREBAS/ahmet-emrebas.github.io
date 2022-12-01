import { DataSource } from 'typeorm';
import { Task } from './Task';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('task.id', 'id')
      .addSelect('task.name', 'label')
      .from(Task, 'task');
  },
})
export class TaskOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
