import {
  Entity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Permission } from '../permission';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Employee extends BaseEntity {
  @Column({ type: 'text' })
  fullName: string;

  @Column({ type: 'text' })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  phone: string;

  @ManyToMany(() => Permission, { eager: true, nullable: true })
  @JoinTable()
  permissions: Permission;

  @ManyToOne(() => Pricelevel, { eager: true, nullable: true })
  @JoinColumn()
  pricelevel: Pricelevel;
}
