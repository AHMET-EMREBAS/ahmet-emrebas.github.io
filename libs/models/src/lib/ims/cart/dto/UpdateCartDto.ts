import { UpdateCart } from '@ae/common/ims/cart/UpdateCart';

import { StringProperty } from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCartDto implements UpdateCart {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    description: 'unique cart name',
  })
  name: string;
}
