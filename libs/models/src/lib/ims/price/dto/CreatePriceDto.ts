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
} from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class CreatePriceDto implements CreatePrice {
  @NumberProperty({
    required: true,

    maximum: 900900900900,
  })
  price: number;

  @NumberProperty({
    required: true,

    maximum: 900900900900,
  })
  cost: number;

  @ManyToOneProperty(IDDto, { required: true })
  pricelevel: IDDto;

  @ManyToOneProperty(IDDto, { required: true })
  product: IDDto;
}
