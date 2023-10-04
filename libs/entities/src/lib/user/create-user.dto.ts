/** Generated by @techbir/gen:entity */

import { Dto, Property, IDDto } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Role } from './../role';
@Dto()
export class CreateUserDto {
  @Property({
    autocomplete: 'username',
    format: 'email',
    icon: 'person',
    inputType: 'text',
    label: 'Username',
    name: 'username',
    required: true,
    type: 'string',
    unique: true,
  })
  username!: string;
  @Property({
    name: 'password',
    type: 'string',
    format: 'password',
    required: true,
    autocomplete: 'current-password',
    inputType: 'password',
    icon: 'password',
    label: 'Password',
    hash: true,
  })
  password!: string;
  @Property({
    defaultValue: false,
    name: 'isAdmin',
    type: 'boolean',
    icon: 'check_box_outline_blank',
    inputType: 'checkbox',
  })
  isAdmin?: boolean = false;
  @Property({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'roles',
    target: IDDto,
  })
  roles?: IDDto[];
}
