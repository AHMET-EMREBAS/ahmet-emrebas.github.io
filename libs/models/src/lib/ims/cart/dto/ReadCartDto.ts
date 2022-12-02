import { ReadCart } from '@ae/common/ims/cart/ReadCart';

import { StringProperty, DTO } from '@ae/core';

@DTO()
export class ReadCartDto implements ReadCart {
  @StringProperty({ required: true })
  name: string;
}
