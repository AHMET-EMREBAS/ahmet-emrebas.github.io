import { Dto, Property, IDDto } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
@Dto()
export class CreatePriceLevelDto {
  @Property({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
}
