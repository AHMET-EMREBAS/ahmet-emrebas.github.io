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
} from '@ae/core';

import { ReadPermissionDto } from '../../Permission';

import { ReadPricelevelDto } from '../../Pricelevel';

export class ReadCustomerDto implements ReadCustomer {
  @StringProperty({ required: false })
  fullName: string;

  @StringProperty({ required: true })
  username: string;

  @StringProperty({ required: true })
  password: string;

  @StringProperty({ required: true })
  phone: string;

  @ManyToManyProperty({ required: false })
  permissions: ReadPermissionDto[];

  @ManyToOneProperty({ required: false })
  pricelevel: ReadPricelevelDto;
}
