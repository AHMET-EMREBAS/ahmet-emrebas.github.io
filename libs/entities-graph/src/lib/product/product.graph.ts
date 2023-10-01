import {
  Field,
  ObjectType,
  BaseInput,
  Input,
  IDDto,
  IDINput,
} from '@techbir/core';
import { Category } from './../category';

@ObjectType()
export class Product extends BaseInput {
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

@Input()
export class CrateProductInput {
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
    target: IDINput,
    eager: true,
    join: true,
  })
  category?: IDINput;
}
