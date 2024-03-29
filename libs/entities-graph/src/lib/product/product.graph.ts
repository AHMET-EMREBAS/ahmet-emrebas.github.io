/** Generated by @techbir/gen:entity */

import { Field, ObjectType, Input, BaseInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Category } from './../category';
@ObjectType()
export class Product extends BaseInput {
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
    name: 'description',
    type: 'string',
    minLength: 3,
    maxLength: 400,
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'description',
    label: 'Description',
  })
  description?: string;
  @Field({
    name: 'upc',
    type: 'string',
    minLength: 11,
    maxLength: 13,
    inputType: 'text',
    autocomplete: 'off',
    icon: 'qr_code',
    label: 'Upc',
  })
  upc?: string;
  @Field({
    type: 'ManyToOne',
    name: 'category',
    target: Category,
    eager: true,
    join: true,
  })
  category?: Category;
}
