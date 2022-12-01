import { ReadTag } from '@ae/common/pms/tag/ReadTag';

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

export class ReadTagDto implements ReadTag {
  @StringProperty({ required: true })
  name: string;
}
