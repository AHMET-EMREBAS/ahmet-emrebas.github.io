import { Entity, Column, JoinColumn, JoinTable } from 'typeorm';

import { BaseEntity } from '@ae/core';

@Entity()
export class Pricelevel extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;
}
