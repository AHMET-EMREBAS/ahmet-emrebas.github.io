import { ReadPrice } from '@ae/common/ims/price/CreatePrice';

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

import { ReadPricelevelDto } from '../../Pricelevel';

import { ReadProductDto } from '../../Product';

export class ReadPriceDto implements ReadPrice {
  @NumberProperty({ required: true })
  price: number;

  @NumberProperty({ required: true })
  cost: number;

  @ManyToOneProperty({ required: true })
  pricelevel: ReadPricelevelDto;

  @ManyToOneProperty({ required: true })
  product: ReadProductDto;
}
