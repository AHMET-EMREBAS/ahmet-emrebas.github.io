import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Cart } from '../cart/Cart';

@Entity()
export class Transaction extends BaseEntity {
  @Column({
    type: 'boolean',
  })
  complete?: boolean;

  @ManyToOne(() => Cart, { eager: true, nullable: true })
  @JoinColumn()
  cart?: Cart;
}
