/** Generated by @techbir/gen:entity */

import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Permission } from './../permission';
@Entity()
export class Role extends BaseEntity {
  @Column({
    autocomplete: 'off',
    icon: 'info',
    inputType: 'text',
    label: 'Name',
    maxLength: 30,
    minLength: 3,
    name: 'name',
    required: true,
    type: 'string',
    unique: true,
  })
  name!: string;
  @Relation({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'permissions',
    target: Permission,
  })
  permissions?: Permission[];
}
