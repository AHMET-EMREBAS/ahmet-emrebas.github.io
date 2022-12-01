import { CreatePermission } from '@ae/common/pms/permission/CreatePermission';

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

export class CreatePermissionDto implements CreatePermission {
  @StringProperty({
    required: true,
    minLength: 3,
    maxLength: 20,
  })
  name: string;

  @StringProperty({
    required: true,
    minLength: 3,
    maxLength: 400,
  })
  description: string;
}
