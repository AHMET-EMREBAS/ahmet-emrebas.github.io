import {
  Entity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

import { BaseEntity } from '@ae/core';

import { User } from '../user/User';

import { Tag } from '../tag/Tag';

@Entity()
export class Task extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @Column({
    type: 'text',

    nullable: true,
  })
  description?: string;

  @Column({
    type: 'text',

    nullable: true,
  })
  status?: string;

  @ManyToOne(() => User, { eager: true, nullable: true })
  @JoinColumn()
  user?: User;

  @ManyToMany(() => Tag, { eager: true, nullable: true })
  @JoinTable()
  tag?: Tag[];
}
