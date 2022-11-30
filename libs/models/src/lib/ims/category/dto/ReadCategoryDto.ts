import { ReadCategory } from '@ae/common/ims/category/CreateCategory';

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

export class ReadCategoryDto implements ReadCategory {
  @StringProperty({ required: true })
  name: string;
}
