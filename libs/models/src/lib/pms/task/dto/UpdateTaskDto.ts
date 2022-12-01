import { CreateTask } from '@ae/common/pms/task/CreateTask';

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
export class UpdateTaskDto implements UpdateTask {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,
  })
  description: string;

  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    enum: ['open', 'inprogress', 'done'],
  })
  status: string;

  @ManyToOneProperty({ required: false })
  user: IDDto;

  @ManyToManyProperty({ required: false })
  tag: IDDto[];
}
