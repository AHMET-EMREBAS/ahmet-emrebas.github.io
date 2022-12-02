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
} from '@ae/core';

import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateTransactionDto implements CreateTransaction {
  @BooleanProperty({
    required: true,
  })
  complete: boolean;

  @ManyToOneProperty(IDDto, { required: true })
  cart: IDDto;
}
