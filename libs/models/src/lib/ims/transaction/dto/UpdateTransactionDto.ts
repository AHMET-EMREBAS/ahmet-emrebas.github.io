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
export class UpdateTransactionDto implements UpdateTransaction {
  @BooleanProperty({
    required: false,
  })
  complete: boolean;

  @ManyToOneProperty({ required: false })
  cart: IDDto;
}
