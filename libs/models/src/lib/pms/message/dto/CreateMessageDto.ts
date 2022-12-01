import { CreateMessage } from '@ae/common/pms/message/CreateMessage';

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

export class CreateMessageDto implements CreateMessage {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  title: string;

  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 400,
  })
  message: string;

  @ManyToOneProperty({ required: true })
  to: IDDto;

  @ManyToOneProperty({ required: true })
  from: IDDto;
}
