import { BaseEntity, Entity, Column, ManyToOne } from '@ae/core';

import { Category } from '../category/Category';

@Entity()
export class Product extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @Column({
    type: 'text',

    nullable: true,
  })
  description?: string;

  @Column({
    type: 'text',

    unique: true,
  })
  barcode?: string;

  @Column({
    type: 'numeric',
  })
  price?: number;

  @Column({
    type: 'numeric',
  })
  cost?: number;

  @ManyToOne(Category, { eager: true, nullable: true })
  category?: Category;
}
