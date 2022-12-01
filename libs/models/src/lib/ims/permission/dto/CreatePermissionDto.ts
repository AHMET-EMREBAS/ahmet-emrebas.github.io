import { CreatePermission } from '@ae/common/ims/permission/CreatePermission';

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
