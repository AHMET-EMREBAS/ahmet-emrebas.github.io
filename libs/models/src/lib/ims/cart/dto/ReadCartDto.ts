import { ReadCart } from '@ae/common/ims/cart/ReadCart';

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
export class ReadCartDto extends BaseEntity implements ReadCart {
  @StringProperty({ description: 'unique cart name' })
  name: string;
}
