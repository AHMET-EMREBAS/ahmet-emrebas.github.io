import { Field, Input } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Category } from './../category';
@Input()
export class CreateProductInput {
  @Field({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
  @Field({ name: 'description', type: 'string', minLength: 3, maxLength: 400 })
  description?: string;
  @Field({ name: 'upc', type: 'string', minLength: 11, maxLength: 13 })
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