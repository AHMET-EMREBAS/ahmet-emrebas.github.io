import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

import { Product } from '../product/Product';

import { Cart } from '../cart/Cart';

import { Customer } from '../customer/Customer';

@Entity()
export class Order extends BaseEntity {
  @Column({
    type: 'numeric',
  })
  quantity?: number;

  @ManyToOne(Product, { eager: true, nullable: true })
  product?: Product;

  @ManyToOne(Cart, { eager: true, nullable: true })
  cart?: Cart;

  @ManyToOne(Customer, { eager: true, nullable: true })
  customer?: Customer;
}
