import { CreateCategory } from '@ae/common/ims/category/CreateCategory';

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

export class CreateCategoryDto implements CreateCategory {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
