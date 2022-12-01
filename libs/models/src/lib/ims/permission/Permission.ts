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
