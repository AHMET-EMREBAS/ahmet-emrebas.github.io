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

import { Porder } from '../porder';

@Entity()
export class Payment extends BaseEntity {
  @OneToMany(() => Porder, (e) => e.id, { eager: true })
  @JoinTable()
  orders: Porder[];
}
