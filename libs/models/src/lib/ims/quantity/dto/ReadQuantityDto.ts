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
  DTO,
} from '@ae/core';

import { ReadProductDto } from '../../Product';

import { ReadStoreDto } from '../../Store';

@DTO()
export class ReadQuantityDto implements ReadQuantity {
  @NumberProperty({ required: true })
  quantity: number;

  @ManyToOneProperty({ required: true })
  product: ReadProductDto;

  @ManyToOneProperty({ required: true })
  store: ReadStoreDto;
}
