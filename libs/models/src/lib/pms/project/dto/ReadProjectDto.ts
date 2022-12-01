import { ReadProject } from '@ae/common/pms/project/ReadProject';

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

@DTO()
export class ReadProjectDto implements ReadProject {
  @StringProperty({ required: true })
  name: string;
}
