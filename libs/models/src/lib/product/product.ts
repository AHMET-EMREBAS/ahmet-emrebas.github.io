import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Category } from '../category';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  barcode: string;

  @Column({ type: 'numeric' })
  price: string;

  @Column({ type: 'numeric' })
  cost: string;

  @ManyToOne(() => Category, { eager: true, nullable: true })
  @JoinColumn()
  category: Category;
}
