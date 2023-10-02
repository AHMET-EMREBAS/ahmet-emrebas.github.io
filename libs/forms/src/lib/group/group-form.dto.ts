import { Validations } from '@techbir/common';

export class GroupFormDto {
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
}
