import { CreateOrder } from '@ae/common/ims/order/CreateOrder';

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
export class CreateOrderDto implements CreateOrder {
  @NumberProperty({
    required: true,

    maximum: 900900900900,
  })
  quantity: number;

  @ManyToOneProperty(IDDto, { required: true })
  product: IDDto;

  @ManyToOneProperty(IDDto, { required: true })
  cart: IDDto;

  @ManyToOneProperty(IDDto, { required: true })
  customer: IDDto;
}
