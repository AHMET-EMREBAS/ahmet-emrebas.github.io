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

import { PriceLevel } from '../price-level';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @ManyToOne(() => PriceLevel, (e) => e.id, { eager: true })
  @JoinColumn()
  priceLevel: PriceLevel;
}
