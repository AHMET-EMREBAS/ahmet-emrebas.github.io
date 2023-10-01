import { Field, ObjectType, Input, BaseInput } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
@ObjectType()
export class PriceLevel extends BaseInput {
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
