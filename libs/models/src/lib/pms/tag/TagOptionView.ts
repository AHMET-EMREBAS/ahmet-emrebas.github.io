import { DataSource } from 'typeorm';
import { Tag } from './Tag';
import { ViewEntity, ViewColumn } from '@ae/core';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('tag.id', 'id')
      .addSelect('tag.name', 'label')
      .from(Tag, 'tag');
  },
})
export class TagOptionView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  label: string;
}
