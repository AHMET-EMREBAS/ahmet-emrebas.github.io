import { DataSource } from 'typeorm';
import { Project } from './Project';

import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('project.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY project.id)`, 'index')

      .addSelect('project.name', 'name')

      .from(Project, 'project');
  },
})
export class ProjectView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;
}
