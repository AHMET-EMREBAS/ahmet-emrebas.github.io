import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Tag } from './tag.entity';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('tag.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY tag.id)`, 'index')

      .addSelect('tag.uuid', 'uuid')
      .addSelect('tag.createdAt', 'createdAt')
      .addSelect('tag.updatedAt', 'updatedAt')
      .addSelect('tag.deletedAt', 'deletedAt')
      .addSelect('tag.active', 'active')

      .addSelect('tag.name', 'name')

      .from(Tag, 'tag');
  },
})
export class TagView {
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
  name: string;
}
