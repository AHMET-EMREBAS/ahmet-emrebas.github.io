import { ReadCustomer } from '@ae/common/ims/customer/ReadCustomer';

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
export class ReadCustomerDto extends BaseEntity implements ReadCustomer {
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
