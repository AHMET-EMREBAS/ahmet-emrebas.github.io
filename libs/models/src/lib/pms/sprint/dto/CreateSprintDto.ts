import { CreateSprint } from '@ae/common/pms/sprint/CreateSprint';

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

export class CreateSprintDto implements CreateSprint {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @ManyToOneProperty({ required: true })
  project: IDDto;
}
