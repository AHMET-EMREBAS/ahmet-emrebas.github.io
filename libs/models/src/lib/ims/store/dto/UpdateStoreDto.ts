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
  DTO,
} from '@ae/core';

@DTO()
export class UpdateStoreDto implements UpdateStore {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 30,
  })
  name: string;

  @ManyToOneProperty({ required: false })
  pricelevel: IDDto;
}
