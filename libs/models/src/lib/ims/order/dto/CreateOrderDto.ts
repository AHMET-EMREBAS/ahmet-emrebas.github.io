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

export class CreateOrderDto implements CreateOrder {
  @NumberProperty({
    required: true,
  })
  quantity: number;

  @ManyToOneProperty({ required: true })
  product: IDDto;

  @ManyToOneProperty({ required: true })
  cart: IDDto;

  @ManyToOneProperty({ required: true })
  customer: IDDto;
}
