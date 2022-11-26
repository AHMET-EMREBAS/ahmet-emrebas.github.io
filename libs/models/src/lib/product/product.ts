import {
  Entity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Category } from '../category';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  description: string;

  @ManyToOne(() => Category, { eager: true, nullable: true })
  @JoinColumn()
  category: Category;

  @ManyToMany(() => Category, { eager: true, nullable: true })
  @JoinTable({ name: 'product-categories' })
  categories: Category;

  @OneToMany(() => Category, (category: Category) => category.id, {
    eager: true,
    nullable: true,
  })
  @JoinTable({ name: 'product-categoriesAll' })
  categoriesAll: Category;
}
