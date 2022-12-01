import { ReadTransaction } from '@ae/common/ims/transaction/ReadTransaction';

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
  DTO,
} from '@ae/core';

import { ReadCartDto } from '../../Cart';

@DTO()
export class ReadTransactionDto implements ReadTransaction {
  @BooleanProperty({ required: true })
  complete: boolean;

  @ManyToOneProperty({ required: true })
  cart: ReadCartDto;
}
