import { Entity, Column, JoinColumn, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from '@ae/core';

import { Project } from '../project/Project';

@Entity()
export class Sprint extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @ManyToOne(() => Project, { eager: true, nullable: true })
  @JoinColumn()
  project?: Project;
}
