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
  DTO,
} from '@ae/core';

@DTO()
export class UpdateOrderDto implements UpdateOrder {
  @NumberProperty({
    required: false,
  })
  quantity: number;

  @ManyToOneProperty({ required: false })
  product: IDDto;

  @ManyToOneProperty({ required: false })
  cart: IDDto;

  @ManyToOneProperty({ required: false })
  customer: IDDto;
}
