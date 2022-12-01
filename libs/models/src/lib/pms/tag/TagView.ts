import { DataSource } from 'typeorm';
import { Tag } from './Tag';

import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('tag.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY tag.id)`, 'index')

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
  name: string;
}
