import { CreateCart } from '@ae/common/ims/cart/CreateCart';

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

export class CreateCartDto implements CreateCart {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  name: string;
}
