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
} from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateQuantityDto implements CreateQuantity {
  @NumberProperty({
    required: true,

    maximum: 900900900900,
    minimum: -1000,
  })
  quantity: number;

  @ManyToOneProperty(IDDto, { required: true })
  product: IDDto;

  @ManyToOneProperty(IDDto, { required: true })
  store: IDDto;
}
