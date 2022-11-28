import { Entity, Column, JoinColumn, JoinTable } from 'typeorm';

import { BaseEntity } from '@ae/core';

@Entity()
export class Department extends BaseEntity {
  @Column({ type: 'text' })
  name: string;
}
