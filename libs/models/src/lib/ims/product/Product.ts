import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

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

    nullable: true,
  })
  barcode?: string;

  @Column({
    type: 'numeric',

    nullable: true,
  })
  price?: number;

  @Column({
    type: 'numeric',

    nullable: true,
  })
  cost?: number;

  @ManyToOne(() => Category, { eager: true, nullable: true })
  @JoinColumn()
  category?: Category;
}
