import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

import { Permission } from '../permission/Permission';

import { Pricelevel } from '../pricelevel/Pricelevel';

@Entity()
export class User extends BaseEntity {
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

  @ManyToMany(Permission, { eager: true, nullable: true })
  permissions?: Permission[];

  @ManyToOne(Pricelevel, { eager: true, nullable: true })
  pricelevel?: Pricelevel;
}
