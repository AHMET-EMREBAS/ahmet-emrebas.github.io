import { CreateDepartment } from '@ae/common/ims';

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

export class CreateDepartmentDto implements CreateDepartment {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
