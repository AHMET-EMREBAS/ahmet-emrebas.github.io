import { CreatePricelevel } from '@ae/common/ims/pricelevel/CreatePricelevel';
import { UpdatePricelevel } from '@ae/common/ims/pricelevel/UpdatePricelevel';

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
export class UpdatePricelevelDto implements UpdatePricelevel {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
