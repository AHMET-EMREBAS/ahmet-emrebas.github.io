import {
  Entity,
  BaseEntity,
  StringColumn,
  NumberColumn,
  IntegerColumn,
  ManyToOne,
} from '@ae/core/orm';

import { Category } from '../category';

import { IProduct } from '@ae/common/interface/product';

@Entity()
export class Product extends BaseEntity implements IProduct<Category> {
  @StringColumn({ unique: true })
  name: string;

  @StringColumn({})
  description: string;

  @StringColumn({ unique: true })
  upc: string;

  @NumberColumn({})
  price: number;

  @NumberColumn({})
  cost: number;

  @IntegerColumn({})
  quantity: number;

  @ManyToOne(Category, {})
  category: Category;
}
