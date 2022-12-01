import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  OneToMany,
  OneToOne,
  ManyToOne,
} from '@ae/core';

@Entity()
export class Pricelevel extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;
}
