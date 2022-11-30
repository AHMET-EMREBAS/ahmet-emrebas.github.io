import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Pricelevel } from '../pricelevel/Pricelevel';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'text' })
  name?: string;

  @ManyToOne(() => Pricelevel, { eager: true, nullable: true })
  @JoinColumn()
  pricelevel?: Pricelevel;
}
