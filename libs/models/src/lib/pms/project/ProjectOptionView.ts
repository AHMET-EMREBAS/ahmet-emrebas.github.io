import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { Project } from './Project';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('project.id', 'id')
      .addSelect('project.name', 'label')
      .from(Project, 'project');
  },
})
export class ProjectOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
