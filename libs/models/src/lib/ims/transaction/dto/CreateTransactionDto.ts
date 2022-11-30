import { CreateTransaction } from '@ae/common/ims';

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

export class CreateTransactionDto implements CreateTransaction {
  @BooleanProperty({
    required: true,
  })
  complete: boolean;

  @ManyToOneProperty({ required: true })
  cart: IDDto;
}
