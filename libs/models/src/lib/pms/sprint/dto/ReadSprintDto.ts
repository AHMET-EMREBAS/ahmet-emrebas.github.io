import { ReadSprint } from '@ae/common/pms/sprint/ReadSprint';

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

import { ReadProjectDto } from '../../Project';

@DTO()
export class ReadSprintDto implements ReadSprint {
  @StringProperty({ required: true })
  name: string;

  @ManyToOneProperty({ required: true })
  project: ReadProjectDto;
}
