import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

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
}
