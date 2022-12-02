import { CreateStore } from '@ae/common/ims/store/CreateStore';
import { UpdateStore } from '@ae/common/ims/store/UpdateStore';

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
export class UpdateStoreDto implements UpdateStore {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,

    description: 'Unique store name',
  })
  name: string;

  @ManyToOneProperty(IDDto, { required: false })
  pricelevel: IDDto;
}
