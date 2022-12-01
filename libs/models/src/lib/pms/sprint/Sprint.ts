import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

import { Project } from '../project/Project';

@Entity()
export class Sprint extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @ManyToOne(Project, { eager: true, nullable: true })
  project?: Project;
}
