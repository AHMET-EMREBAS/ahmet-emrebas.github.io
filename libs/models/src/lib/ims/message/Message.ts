import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { User } from '../user';

@Entity()
export class Message extends BaseEntity {
  @Column({ type: 'text' })
  title?: string;

  @Column({ type: 'text' })
  message?: string;

  @ManyToOne(() => User, { eager: true, nullable: true })
  @JoinColumn()
  to?: User;

  @ManyToOne(() => User, { eager: true, nullable: true })
  @JoinColumn()
  from?: User;
}
