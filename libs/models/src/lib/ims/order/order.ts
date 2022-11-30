import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Product } from '../product';

import { Cart } from '../cart';

import { Customer } from '../customer';

@Entity()
export class Order extends BaseEntity {
  @Column({ type: 'numeric' })
  quantity: string;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Cart, { eager: true, nullable: true })
  @JoinColumn()
  cart: Cart;

  @ManyToOne(() => Customer, { eager: true, nullable: true })
  @JoinColumn()
  customer: Customer;
}
