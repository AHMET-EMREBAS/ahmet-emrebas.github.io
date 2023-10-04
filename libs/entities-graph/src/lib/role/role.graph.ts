/** Generated by @techbir/gen:entity */

import { Field, ObjectType, Input, BaseInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Permission } from './../permission';
@ObjectType()
export class Role extends BaseInput {
  @Field({
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
  @Field({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'permissions',
    target: Permission,
  })
  permissions?: Permission[];
}
