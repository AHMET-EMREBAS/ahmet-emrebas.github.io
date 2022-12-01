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
  DTO,
} from '@ae/core';

@DTO()
export class UpdateProductDto implements UpdateProduct {
  @StringProperty({
    required: false,
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
    required: false,
    minLength: 10,
    maxLength: 13,

    ean: true,
  })
  barcode: string;

  @NumberProperty({
    required: false,
  })
  price: number;

  @NumberProperty({
    required: false,
  })
  cost: number;

  @ManyToOneProperty({ required: false })
  category: IDDto;
}
