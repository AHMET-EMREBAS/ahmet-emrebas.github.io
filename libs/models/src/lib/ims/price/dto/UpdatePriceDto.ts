import { CreatePrice } from '@ae/common/ims/price/CreatePrice';
import { UpdatePrice } from '@ae/common/ims/price/UpdatePrice';

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
export class UpdatePriceDto implements UpdatePrice {
  @NumberProperty({
    required: false,

    maximum: 900900900900,
  })
  price: number;

  @NumberProperty({
    required: false,

    maximum: 900900900900,
  })
  cost: number;

  @ManyToOneProperty(IDDto, { required: false })
  pricelevel: IDDto;

  @ManyToOneProperty(IDDto, { required: false })
  product: IDDto;
}
