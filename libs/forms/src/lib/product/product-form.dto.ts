import { Validations } from '@techbir/common';

export class ProductFormDto {
  @Validations({
    autocomplete: 'off',
    icon: 'info',
    inputType: 'text',
    label: 'Name',
    maxLength: 30,
    minLength: 3,
    name: 'name',
    required: true,
    type: 'string',
    unique: true,
  })
  name?: string;

  @Validations({
    name: 'description',
    type: 'string',
    minLength: 3,
    maxLength: 400,
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'description',
    label: 'Description',
  })
  description?: string;

  @Validations({
    name: 'upc',
    type: 'string',
    minLength: 11,
    maxLength: 13,
    inputType: 'text',
    autocomplete: 'off',
    icon: 'qr_code',
    label: 'Upc',
  })
  upc?: string;
}
