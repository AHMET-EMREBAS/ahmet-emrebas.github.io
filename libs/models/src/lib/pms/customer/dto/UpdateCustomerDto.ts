import { CreateCustomer } from '@ae/common/pms/customer/CreateCustomer';
import { UpdateCustomer } from '@ae/common/pms/customer/UpdateCustomer';

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
export class UpdateCustomerDto implements UpdateCustomer {
  @StringProperty({
    required: false,
    minLength: 3,
    maxLength: 50,
  })
  fullName: string;

  @StringProperty({
    required: false,
    minLength: 6,
    maxLength: 50,

    email: true,
  })
  username: string;

  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    password: true,
  })
  password: string;

  @StringProperty({
    required: false,
    minLength: 10,
    maxLength: 20,
  })
  phone: string;

  @ManyToManyProperty({ required: false })
  permissions: IDDto[];

  @ManyToOneProperty({ required: false })
  pricelevel: IDDto;
}
