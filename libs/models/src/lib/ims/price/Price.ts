import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Pricelevel } from '../pricelevel/Pricelevel';

import { Product } from '../product/Product';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'numeric' })
  price?: number;

  @Column({ type: 'numeric' })
  cost?: number;

  @ManyToOne(() => Pricelevel, { eager: true, nullable: true })
  @JoinColumn()
  pricelevel?: Pricelevel;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn()
  product?: Product;
}
