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
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadPermissionDto extends BaseEntity implements ReadPermission {
  @StringProperty({})
  name: string;

  @StringProperty({})
  description: string;
}
