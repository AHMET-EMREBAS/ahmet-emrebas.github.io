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
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

import { ReadCategoryDto } from '../../category/dto/ReadCategoryDto';

@ObjectType()
export class ReadProductDto extends BaseEntity implements ReadProduct {
  @StringProperty({ description: 'Unique product name' })
  name: string;

  @StringProperty({ description: 'Product description' })
  description: string;

  @StringProperty({ description: 'Unique product barcode' })
  barcode: string;

  @NumberProperty({ description: 'Product price' })
  price: number;

  @NumberProperty({ description: 'Product cost' })
  cost: number;

  @ManyToOneProperty(ReadCategoryDto, { description: 'Product category' })
  category: ReadCategoryDto;
}
