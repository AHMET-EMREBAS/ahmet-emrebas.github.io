import { Field, Input, BaseInput } from '@techbir/core';
@Input()
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
