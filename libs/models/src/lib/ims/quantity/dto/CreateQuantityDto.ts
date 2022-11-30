import { CreateQuantity } from '@ae/common/ims';

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

export class CreateQuantityDto implements CreateQuantity {
  @NumberProperty({
    required: true,
  })
  quantity: number;

  @ManyToOneProperty({ required: true })
  product: IDDto;

  @ManyToOneProperty({ required: true })
  store: IDDto;
}
