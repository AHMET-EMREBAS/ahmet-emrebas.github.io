/** Generated by @techbir/gen:entity */

import { Dto, Property, IDDto } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Permission } from './../permission';
@Dto()
export class CreateRoleDto {
  @Property({
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
  @Property({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'permissions',
    target: IDDto,
  })
  permissions?: IDDto[];
}
