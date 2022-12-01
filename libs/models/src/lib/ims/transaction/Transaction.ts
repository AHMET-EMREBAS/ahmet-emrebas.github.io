import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

import { Cart } from '../cart/Cart';

@Entity()
export class Transaction extends BaseEntity {
  @Column({
    type: 'boolean',
  })
  complete?: boolean;

  @ManyToOne(Cart, { eager: true, nullable: true })
  cart?: Cart;
}
