import { ReadProduct } from '@ae/common/ims/product/ReadProduct';

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

import { ReadCategoryDto } from '../../Category';

@DTO()
export class ReadProductDto implements ReadProduct {
  @StringProperty({ required: true })
  name: string;

  @StringProperty({ required: false })
  description: string;

  @StringProperty({ required: true })
  barcode: string;

  @NumberProperty({ required: true })
  price: number;

  @NumberProperty({ required: true })
  cost: number;

  @ManyToOneProperty({ required: false })
  category: ReadCategoryDto;
}
