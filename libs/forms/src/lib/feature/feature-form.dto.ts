import { Validations } from '@techbir/common';

export class FeatureFormDto {
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
    name: 'value',
    type: 'string',
    minLength: 3,
    maxLength: 400,
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'description',
    label: 'Description',
  })
  value?: string;
}
