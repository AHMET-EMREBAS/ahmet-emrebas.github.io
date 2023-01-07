import { BaseEntity } from '@ae/core/entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Category } from '../category';
import { Department } from '../department';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'numeric' })
  cost: number;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({ type: 'text', unique: true })
  barcode: string;

  @ManyToOne(() => Category, (e) => e.id, { eager: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Department, (e) => e.id, { eager: true })
  @JoinColumn()
  department: Department;
}
