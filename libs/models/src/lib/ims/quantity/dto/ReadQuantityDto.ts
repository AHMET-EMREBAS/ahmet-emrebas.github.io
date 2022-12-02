import { ReadQuantity } from '@ae/common/ims/quantity/ReadQuantity';

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

import { ReadStoreDto } from '../../store/dto/ReadStoreDto';

@ObjectType()
export class ReadQuantityDto extends BaseEntity implements ReadQuantity {
  @NumberProperty({})
  quantity: number;

  @ManyToOneProperty(ReadProductDto, {})
  product: ReadProductDto;

  @ManyToOneProperty(ReadStoreDto, {})
  store: ReadStoreDto;
}
