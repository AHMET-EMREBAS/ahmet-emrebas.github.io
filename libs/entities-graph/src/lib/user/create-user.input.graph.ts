/** Generated by @techbir/gen:entity */

import { Field, Input, IDInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Role } from './../role';
@Input()
export class CreateUserInput {
  @Field({
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
  @Field({
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
  @Field({
    defaultValue: false,
    name: 'isAdmin',
    type: 'boolean',
    icon: 'check_box_outline_blank',
    inputType: 'checkbox',
  })
  isAdmin?: boolean = false;
  @Field({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'roles',
    target: IDInput,
  })
  roles?: IDInput[];
}
