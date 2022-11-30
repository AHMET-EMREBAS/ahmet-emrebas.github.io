import { CreatePricelevel } from '@ae/common/ims/pricelevel/CreatePricelevel';

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

export class CreatePricelevelDto implements CreatePricelevel {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
