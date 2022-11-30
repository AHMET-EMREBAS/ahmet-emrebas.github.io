import { CreateStore } from '@ae/common/ims';

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

export class CreateStoreDto implements CreateStore {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @ManyToOneProperty({ required: false })
  pricelevel: IDDto;
}
