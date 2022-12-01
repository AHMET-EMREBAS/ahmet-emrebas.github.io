import { ReadCategory } from '@ae/common/ims/category/ReadCategory';

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
  DTO,
} from '@ae/core';

@DTO()
export class ReadCategoryDto implements ReadCategory {
  @StringProperty({ required: true })
  name: string;
}
