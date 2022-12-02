import { CreateTransaction } from '@ae/common/ims/transaction/CreateTransaction';
import { UpdateTransaction } from '@ae/common/ims/transaction/UpdateTransaction';

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
export class UpdateTransactionDto implements UpdateTransaction {
  @BooleanProperty({
    required: false,
  })
  complete: boolean;

  @ManyToOneProperty(IDDto, { required: false })
  cart: IDDto;
}
