/** Generated by @techbir/gen:entity */

import { Dto, Property, IDDto } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
@Dto()
export class CreatePermissionDto {
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
}
