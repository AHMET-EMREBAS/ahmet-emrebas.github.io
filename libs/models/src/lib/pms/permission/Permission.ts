import { Entity, Column, JoinColumn, JoinTable } from 'typeorm';

import { BaseEntity } from '@ae/core';

@Entity()
export class Permission extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @Column({
    type: 'text',
  })
  description?: string;
}
