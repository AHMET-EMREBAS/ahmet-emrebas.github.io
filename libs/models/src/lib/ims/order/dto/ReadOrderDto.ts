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
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

import { ReadProductDto } from '../../product/dto/ReadProductDto';

import { ReadCartDto } from '../../cart/dto/ReadCartDto';

import { ReadCustomerDto } from '../../customer/dto/ReadCustomerDto';

@ObjectType()
export class ReadOrderDto extends BaseEntity implements ReadOrder {
  @NumberProperty({})
  quantity: number;

  @ManyToOneProperty(ReadProductDto, {})
  product: ReadProductDto;

  @ManyToOneProperty(ReadCartDto, {})
  cart: ReadCartDto;

  @ManyToOneProperty(ReadCustomerDto, {})
  customer: ReadCustomerDto;
}
