import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Sprint } from './Sprint';

import { Project } from '../project/Project';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('sprint.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY sprint.id)`, 'index')

      .addSelect('sprint.name', 'name')

      .addSelect('project.name', 'project')

      .from(Sprint, 'sprint')

      .leftJoin(Project, 'project', 'project.id = sprint.projectId');
  },
})
export class SprintView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  project: string;
}
