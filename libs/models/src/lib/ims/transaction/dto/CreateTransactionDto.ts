import { CreateTransaction } from '@ae/common/ims/transaction/CreateTransaction';

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
export class CreateTransactionDto implements CreateTransaction {
  @BooleanProperty({
    required: true,
  })
  complete: boolean;

  @ManyToOneProperty({ required: true })
  cart: IDDto;
}
