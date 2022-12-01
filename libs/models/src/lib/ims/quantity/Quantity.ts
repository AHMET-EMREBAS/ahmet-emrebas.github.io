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

import { Store } from '../store/Store';

@Entity()
export class Quantity extends BaseEntity {
  @Column({
    type: 'numeric',
  })
  quantity?: number;

  @ManyToOne(Product, { eager: true, nullable: true })
  product?: Product;

  @ManyToOne(Store, { eager: true, nullable: true })
  store?: Store;
}
