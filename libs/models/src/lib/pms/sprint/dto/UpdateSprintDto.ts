import { CreateSprint } from '@ae/common/pms/sprint/CreateSprint';
import { UpdateSprint } from '@ae/common/pms/sprint/UpdateSprint';

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
export class UpdateSprintDto implements UpdateSprint {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @ManyToOneProperty({ required: false })
  project: IDDto;
}
