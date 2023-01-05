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
import { PriceLevel } from '../price-level';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'numeric' })
  cost: number;

  @ManyToOne(() => Product, (e) => e.id, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => PriceLevel, (e) => e.id, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  priceLevel: PriceLevel;
}
