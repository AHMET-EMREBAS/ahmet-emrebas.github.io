import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Category } from '../category';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Category, { eager: true, nullable: true })
  @JoinColumn()
  category: Category;
}
