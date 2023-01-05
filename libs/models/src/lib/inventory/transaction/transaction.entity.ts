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

import { Order } from '../order';

@Entity()
export class Transaction extends BaseEntity {
  @OneToMany(() => Order, (e) => e.id, { eager: true })
  @JoinTable()
  orders: Order[];
}
