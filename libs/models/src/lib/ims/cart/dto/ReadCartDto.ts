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
  DTO,
} from '@ae/core';

@DTO()
export class ReadCartDto implements ReadCart {
  @StringProperty({ required: true })
  name: string;
}
