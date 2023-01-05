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
export class Customer extends BaseEntity {
  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column({ type: 'text', nullable: true })
  lastName: string;

  @Column({ type: 'text' })
  phone: string;

  @ManyToOne(() => PriceLevel, (e) => e.id, { eager: true })
  @JoinColumn()
  priceLevel: PriceLevel;
}
