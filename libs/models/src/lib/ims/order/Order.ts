import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Product } from '../product/Product';

import { Cart } from '../cart/Cart';

import { Customer } from '../customer/Customer';

@Entity()
export class Order extends BaseEntity {
  @Column({ type: 'numeric' })
  quantity?: number;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn()
  product?: Product;

  @ManyToOne(() => Cart, { eager: true, nullable: true })
  @JoinColumn()
  cart?: Cart;

  @ManyToOne(() => Customer, { eager: true, nullable: true })
  @JoinColumn()
  customer?: Customer;
}
