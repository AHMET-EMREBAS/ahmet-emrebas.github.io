import { ReadTask } from '@ae/common/pms/task/ReadTask';

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

import { ReadUserDto } from '../../User';

import { ReadTagDto } from '../../Tag';

@DTO()
export class ReadTaskDto implements ReadTask {
  @StringProperty({ required: true })
  name: string;

  @StringProperty({ required: false })
  description: string;

  @StringProperty({ required: false })
  status: string;

  @ManyToOneProperty({ required: false })
  user: ReadUserDto;

  @ManyToManyProperty({ required: false })
  tag: ReadTagDto[];
}
