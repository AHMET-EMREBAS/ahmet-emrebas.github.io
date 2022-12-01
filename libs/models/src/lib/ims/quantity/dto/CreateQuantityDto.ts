import { CreateQuantity } from '@ae/common/ims/quantity/CreateQuantity';

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
