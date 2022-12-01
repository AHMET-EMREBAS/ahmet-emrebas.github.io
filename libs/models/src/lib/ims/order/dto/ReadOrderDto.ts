import { ReadOrder } from '@ae/common/ims/order/ReadOrder';

import {
  IDDto,
  StringProperty,
  DateProperty,
  NumberProperty,
  BooleanProperty,
  EmailProperty,
  ManyToManyProperty,
  ManyToOneProperty,
  OneToManyProperty,
  OneToOneProperty,
} from '@ae/core';

import { ReadProductDto } from '../../Product';

import { ReadCartDto } from '../../Cart';

import { ReadCustomerDto } from '../../Customer';

export class ReadOrderDto implements ReadOrder {
  @NumberProperty({ required: true })
  quantity: number;

  @ManyToOneProperty({ required: true })
  product: ReadProductDto;

  @ManyToOneProperty({ required: true })
  cart: ReadCartDto;

  @ManyToOneProperty({ required: true })
  customer: ReadCustomerDto;
}
