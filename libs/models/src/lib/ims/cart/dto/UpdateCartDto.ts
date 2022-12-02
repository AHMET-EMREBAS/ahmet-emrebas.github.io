import { CreateCart } from '@ae/common/ims/cart/CreateCart';
import { UpdateCart } from '@ae/common/ims/cart/UpdateCart';

import {
  IDDto,
  StringProperty,
  DateProperty,
  NumberProperty,
  BooleanProperty,
  EmailProperty,
  PasswordProperty,
  ManyToManyProperty,
  ManyToOneProperty,
  OneToManyProperty,
  OneToOneProperty,
} from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCartDto implements UpdateCart {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    description: 'unique cart name',
  })
  name: string;
}
