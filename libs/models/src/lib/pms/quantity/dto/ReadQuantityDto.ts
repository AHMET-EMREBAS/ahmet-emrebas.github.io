import { ReadQuantity } from '@ae/common/pms/quantity/CreateQuantity';

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

import { ReadStoreDto } from '../../Store';

export class ReadQuantityDto implements ReadQuantity {
  @NumberProperty({ required: true })
  quantity: number;

  @ManyToOneProperty({ required: true })
  product: ReadProductDto;

  @ManyToOneProperty({ required: true })
  store: ReadStoreDto;
}
