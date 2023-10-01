import { Field, Input, IDInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
@Input()
export class CreateCategoryInput {
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
