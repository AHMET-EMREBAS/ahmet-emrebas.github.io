import { ReadPrice } from '@ae/common/ims/price/ReadPrice';

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

import { ReadPricelevelDto } from '../../pricelevel/dto/ReadPricelevelDto';

import { ReadProductDto } from '../../product/dto/ReadProductDto';

@ObjectType()
export class ReadPriceDto extends BaseEntity implements ReadPrice {
  @NumberProperty({})
  price: number;

  @NumberProperty({})
  cost: number;

  @ManyToOneProperty(ReadPricelevelDto, {})
  pricelevel: ReadPricelevelDto;

  @ManyToOneProperty(ReadProductDto, {})
  product: ReadProductDto;
}
