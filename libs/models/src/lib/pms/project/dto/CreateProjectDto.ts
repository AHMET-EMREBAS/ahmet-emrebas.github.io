import { CreateProject } from '@ae/common/pms/project/CreateProject';

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

export class CreateProjectDto implements CreateProject {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  name: string;
}
