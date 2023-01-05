import { BaseEntity } from '@ae/core/entity';
import { Entity, JoinTable, OneToMany } from 'typeorm';

import { Order } from '../order';

@Entity()
export class Transaction extends BaseEntity {
  @OneToMany(() => Order, (e) => e.id, { eager: true })
  @JoinTable()
  orders: Order[];
}
