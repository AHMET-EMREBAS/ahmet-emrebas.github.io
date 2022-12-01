import { CreatePrice } from '@ae/common/ims/price/CreatePrice';

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
export class UpdatePriceDto implements UpdatePrice {
  @NumberProperty({
    required: false,
  })
  price: number;

  @NumberProperty({
    required: false,
  })
  cost: number;

  @ManyToOneProperty({ required: false })
  pricelevel: IDDto;

  @ManyToOneProperty({ required: false })
  product: IDDto;
}
