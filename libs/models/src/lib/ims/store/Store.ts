import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

import { Pricelevel } from '../pricelevel/Pricelevel';

@Entity()
export class Store extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;

  @ManyToOne(Pricelevel, { eager: true, nullable: true })
  pricelevel?: Pricelevel;
}
