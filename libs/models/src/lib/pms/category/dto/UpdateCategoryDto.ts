import { CreateCategory } from '@ae/common/pms/category/CreateCategory';

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
export class UpdateCategoryDto implements UpdateCategory {
  @StringProperty({
    required: false,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
