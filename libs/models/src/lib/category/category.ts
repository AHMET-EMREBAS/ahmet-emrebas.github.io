import { Entity, BaseEntity, StringColumn } from '@ae/core/orm';

import { ICategory } from '@ae/common/interface/category';

@Entity()
export class Category extends BaseEntity implements ICategory {
  @StringColumn({ unique: true })
  name: string;
}
