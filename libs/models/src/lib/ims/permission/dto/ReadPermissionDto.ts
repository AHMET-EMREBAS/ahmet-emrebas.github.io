import { ReadPermission } from '@ae/common/ims/permission/ReadPermission';

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
export class ReadPermissionDto implements ReadPermission {
  @StringProperty({ required: true })
  name: string;

  @StringProperty({ required: true })
  description: string;
}
