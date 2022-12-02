import { CreateCategory } from '@ae/common/ims/category/CreateCategory';

import { StringProperty, DTO } from '@ae/core';

@DTO()
export class CreateCategoryDto implements CreateCategory {
  @StringProperty({
    required: true,
    minLength: 1,
    maxLength: 50,
  })
  name: string;
}
