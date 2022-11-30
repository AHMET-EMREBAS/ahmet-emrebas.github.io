import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Pricelevel } from '../pricelevel';

import { Product } from '../product';

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
