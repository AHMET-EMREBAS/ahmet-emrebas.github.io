import { CreateCategory } from '@ae/common/ims/category/CreateCategory';
import { UpdateCategory } from '@ae/common/ims/category/UpdateCategory';

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
