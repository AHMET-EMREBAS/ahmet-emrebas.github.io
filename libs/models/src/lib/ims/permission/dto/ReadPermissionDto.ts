import { ReadPermission } from '@ae/common/ims/permission/CreatePermission';

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

export class ReadPermissionDto implements ReadPermission {
  @StringProperty({ required: true })
  name: string;

  @StringProperty({ required: true })
  description: string;
}
