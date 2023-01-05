import {
  Entity,
  Column,
  JoinTable,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { Relation, RelationType } from '@ae/core/relations';
import { BaseEntity } from '@ae/core/entity';

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
