import { DataSource } from 'typeorm';
import { Sprint } from './Sprint';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sprint.id', 'id')
      .addSelect('sprint.name', 'label')
      .from(Sprint, 'sprint');
  },
})
export class SprintOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
