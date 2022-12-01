import { ReadProject } from '@ae/common/pms/project/CreateProject';

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

export class ReadProjectDto implements ReadProject {
  @StringProperty({ required: true })
  name: string;
}
