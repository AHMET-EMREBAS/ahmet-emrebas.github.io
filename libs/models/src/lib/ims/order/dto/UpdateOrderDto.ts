import { CreateOrder } from '@ae/common/ims/order/CreateOrder';
import { UpdateOrder } from '@ae/common/ims/order/UpdateOrder';

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
export class UpdateOrderDto implements UpdateOrder {
  @NumberProperty({
    required: false,

    maximum: 900900900900,
  })
  quantity: number;

  @ManyToOneProperty(IDDto, { required: false })
  product: IDDto;

  @ManyToOneProperty(IDDto, { required: false })
  cart: IDDto;

  @ManyToOneProperty(IDDto, { required: false })
  customer: IDDto;
}
