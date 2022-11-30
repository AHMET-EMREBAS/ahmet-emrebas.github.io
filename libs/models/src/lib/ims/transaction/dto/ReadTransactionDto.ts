import { ReadTransaction } from '@ae/common/ims/transaction/CreateTransaction';

import {
  IDDto,
  StringProperty,
  DateProperty,
  NumberProperty,
  BooleanProperty,
  EmailProperty,
  ManyToManyProperty,
  ManyToOneProperty,
  OneToManyProperty,
  OneToOneProperty,
} from '@ae/core';

import { ReadCartDto } from '../../Cart';

export class ReadTransactionDto implements ReadTransaction {
  @BooleanProperty({ required: true })
  complete: boolean;

  @ManyToOneProperty({ required: true })
  cart: ReadCartDto;
}
