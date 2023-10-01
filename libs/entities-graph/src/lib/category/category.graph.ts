import { Field, ObjectType, BaseInput, Input } from '@techbir/core';
@ObjectType()
export class Category extends BaseInput {
  @Field({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
}
