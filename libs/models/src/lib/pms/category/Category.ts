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
export class Category extends BaseEntity {
  @Column({
    type: 'text',

    unique: true,
  })
  name?: string;
}
