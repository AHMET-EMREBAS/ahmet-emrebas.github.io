import { ReadUser } from '@ae/common/ims/user/ReadUser';

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

import { ReadPermissionDto } from '../../permission/dto/ReadPermissionDto';

import { ReadPricelevelDto } from '../../pricelevel/dto/ReadPricelevelDto';

@ObjectType()
export class ReadUserDto extends BaseEntity implements ReadUser {
  @StringProperty({})
  fullName: string;

  @StringProperty({})
  username: string;

  @StringProperty({})
  password: string;

  @StringProperty({})
  phone: string;

  @ManyToManyProperty(ReadPermissionDto, {})
  permissions: ReadPermissionDto[];

  @ManyToOneProperty(ReadPricelevelDto, {})
  pricelevel: ReadPricelevelDto;
}
