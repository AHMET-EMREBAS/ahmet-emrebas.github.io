import { CreateQuantity } from '@ae/common/ims/quantity/CreateQuantity';
import { UpdateQuantity } from '@ae/common/ims/quantity/UpdateQuantity';

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
export class UpdateQuantityDto implements UpdateQuantity {
  @NumberProperty({
    required: false,

    maximum: 900900900900,
    minimum: -1000,
  })
  quantity: number;

  @ManyToOneProperty(IDDto, { required: false })
  product: IDDto;

  @ManyToOneProperty(IDDto, { required: false })
  store: IDDto;
}
