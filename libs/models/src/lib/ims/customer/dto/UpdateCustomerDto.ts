import { CreateCustomer } from '@ae/common/ims/customer/CreateCustomer';
import { UpdateCustomer } from '@ae/common/ims/customer/UpdateCustomer';

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

import { InputType } from '@nestjs/graphql';

@InputType()
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

  @ManyToManyProperty(IDDto, { required: false })
  permissions: IDDto[];

  @ManyToOneProperty(IDDto, { required: false })
  pricelevel: IDDto;
}
