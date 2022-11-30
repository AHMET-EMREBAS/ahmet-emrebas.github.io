import { ReadDepartment } from '@ae/common/ims/department/CreateDepartment';

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

export class ReadDepartmentDto implements ReadDepartment {
  @StringProperty({ required: true })
  name: string;
}
