import { ReadMessage } from '@ae/common/ims/message/CreateMessage';

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

import { ReadUserDto } from '../../User';

export class ReadMessageDto implements ReadMessage {
  @StringProperty({ required: true })
  title: string;

  @StringProperty({ required: true })
  message: string;

  @ManyToOneProperty({ required: true })
  to: ReadUserDto;

  @ManyToOneProperty({ required: true })
  from: ReadUserDto;
}
