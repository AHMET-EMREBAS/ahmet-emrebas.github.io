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

import { Store } from '../store';
import { Product } from '../product';
import { Customer } from '../customer';
import { Employee } from '../employee';

@Entity()
export class Order extends BaseEntity {
  @Column({ type: 'integer' })
  quantity: number;

  @ManyToOne(() => Store, (e) => e.id, { eager: true })
  @JoinColumn()
  store: Store;

  @ManyToOne(() => Product, (e) => e.id, { eager: true })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Customer, (e) => e.id, { eager: true })
  @JoinColumn()
  customer: Customer;

  @ManyToOne(() => Employee, (e) => e.id, { eager: true })
  @JoinColumn()
  employee: Employee;
}
