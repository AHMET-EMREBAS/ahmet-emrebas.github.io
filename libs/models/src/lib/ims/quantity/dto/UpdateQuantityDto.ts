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
export class UpdateQuantityDto implements UpdateQuantity {
  @NumberProperty({
    required: false,
  })
  quantity: number;

  @ManyToOneProperty({ required: false })
  product: IDDto;

  @ManyToOneProperty({ required: false })
  store: IDDto;
}
