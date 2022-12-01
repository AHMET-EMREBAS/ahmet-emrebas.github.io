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
export class CreatePriceDto implements CreatePrice {
  @NumberProperty({
    required: true,
  })
  price: number;

  @NumberProperty({
    required: true,
  })
  cost: number;

  @ManyToOneProperty({ required: true })
  pricelevel: IDDto;

  @ManyToOneProperty({ required: true })
  product: IDDto;
}
