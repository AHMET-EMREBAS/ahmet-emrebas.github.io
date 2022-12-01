import { CreateProject } from '@ae/common/pms/project/CreateProject';
import { UpdateProject } from '@ae/common/pms/project/UpdateProject';

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
export class UpdateProjectDto implements UpdateProject {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
