import {
  Entity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Permission } from '../permission/Permission';

import { Pricelevel } from '../pricelevel/Pricelevel';

@Entity()
export class Customer extends BaseEntity {
  @Column({
    type: 'text',

    nullable: true,
  })
  fullName?: string;

  @Column({
    type: 'text',

    unique: true,
  })
  username?: string;

  @Column({
    type: 'text',
  })
  password?: string;

  @Column({
    type: 'text',

    unique: true,
  })
  phone?: string;

  @ManyToMany(() => Permission, { eager: true, nullable: true })
  @JoinTable()
  permissions?: Permission[];

  @ManyToOne(() => Pricelevel, { eager: true, nullable: true })
  @JoinColumn()
  pricelevel?: Pricelevel;
}
