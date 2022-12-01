import { ReadSprint } from '@ae/common/pms/sprint/CreateSprint';

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

import { ReadProjectDto } from '../../Project';

export class ReadSprintDto implements ReadSprint {
  @StringProperty({ required: true })
  name: string;

  @ManyToOneProperty({ required: true })
  project: ReadProjectDto;
}
