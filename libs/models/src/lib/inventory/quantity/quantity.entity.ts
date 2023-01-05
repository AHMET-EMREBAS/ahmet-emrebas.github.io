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

import { Product } from '../product';
import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity {
  @Column({ type: 'integer', unique: true })
  quantity: number;

  @ManyToOne(() => Product, (e) => e.id, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Store, (e) => e.id, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  store: Store;
}
