import { CreateStore } from '@ae/common/ims/store/CreateStore';

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
export class CreateStoreDto implements CreateStore {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,

    description: 'Unique store name',
  })
  name: string;

  @ManyToOneProperty(IDDto, { required: false })
  pricelevel: IDDto;
}
