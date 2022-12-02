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
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

import { ReadCartDto } from '../../cart/dto/ReadCartDto';

@ObjectType()
export class ReadTransactionDto extends BaseEntity implements ReadTransaction {
  @BooleanProperty({})
  complete: boolean;

  @ManyToOneProperty(ReadCartDto, {})
  cart: ReadCartDto;
}
