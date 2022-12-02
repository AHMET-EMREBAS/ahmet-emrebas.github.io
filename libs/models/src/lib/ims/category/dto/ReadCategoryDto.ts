import { ReadCategory } from '@ae/common/ims/category/ReadCategory';

import {
  IDDto,
  StringProperty,
  DateProperty,
  NumberProperty,
  BooleanProperty,
  EmailProperty,
  ManyToManyProperty,
  ManyToOneProperty,
  OneToManyProperty,
  OneToOneProperty,
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadCategoryDto extends BaseEntity implements ReadCategory {
  @StringProperty({})
  name: string;
}
