import { CreateProduct } from '@ae/common/ims/product/CreateProduct';

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
  DTO,
} from '@ae/core';

@DTO()
export class CreateProductDto implements CreateProduct {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 400,
  })
  description: string;

  @StringProperty({
    required: true,
    minLength: 10,
    maxLength: 13,

    ean: true,
  })
  barcode: string;

  @NumberProperty({
    required: true,
  })
  price: number;

  @NumberProperty({
    required: true,
  })
  cost: number;

  @ManyToOneProperty({ required: false })
  category: IDDto;
}
