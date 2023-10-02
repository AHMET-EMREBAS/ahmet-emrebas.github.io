/** Generated by @techbir/gen:entity */

import { Field, ObjectType, Input, BaseInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Permission } from './../permission';
@ObjectType()
export class Role extends BaseInput {
  @Field({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
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
