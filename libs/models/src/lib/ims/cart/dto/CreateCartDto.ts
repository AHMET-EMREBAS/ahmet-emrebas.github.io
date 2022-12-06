import { CreateCart } from '@ae/common/ims/cart/CreateCart';

import { StringProperty } from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCartDto implements CreateCart {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,

    description: 'unique cart name',
  })
  name: string;
}
