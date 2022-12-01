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
  DTO,
} from '@ae/core';

@DTO()
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
