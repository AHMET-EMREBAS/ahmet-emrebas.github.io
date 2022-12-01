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
  DTO,
} from '@ae/core';

@DTO()
export class UpdateCartDto implements UpdateCart {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,
  })
  name: string;
}
