import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Product } from '../product/Product';

import { Store } from '../store/Store';

@Entity()
export class Quantity extends BaseEntity {
  @Column({
    type: 'numeric',
  })
  quantity?: number;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn()
  product?: Product;

  @ManyToOne(() => Store, { eager: true, nullable: true })
  @JoinColumn()
  store?: Store;
}
