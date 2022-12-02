import { CreateProduct } from '@ae/common/ims/product/CreateProduct';
import { UpdateProduct } from '@ae/common/ims/product/UpdateProduct';

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
} from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto implements UpdateProduct {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    description: 'Unique product name',
  })
  name: string;

  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 400,

    description: 'Product description',
  })
  description: string;

  @StringProperty({
    required: false,
    minLength: 10,
    maxLength: 13,

    ean: true,
    description: 'Unique product barcode',
  })
  barcode: string;

  @NumberProperty({
    required: false,

    maximum: 900900900900,

    description: 'Product price',
  })
  price: number;

  @NumberProperty({
    required: false,

    maximum: 900900900900,

    description: 'Product cost',
  })
  cost: number;

  @ManyToOneProperty(IDDto, { required: false })
  category: IDDto;
}
