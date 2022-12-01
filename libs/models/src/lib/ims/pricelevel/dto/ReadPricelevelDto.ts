import { ReadPricelevel } from '@ae/common/ims/pricelevel/ReadPricelevel';

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

export class ReadPricelevelDto implements ReadPricelevel {
  @StringProperty({ required: true })
  name: string;
}
