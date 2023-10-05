import { Validations } from '@techbir/common';

export class UserFormDto {
  @Validations({
    autocomplete: 'username',
    format: 'email',
    icon: 'person',
    inputType: 'text',
    label: 'Username',
    name: 'username',
    required: true,
    type: 'string',
    unique: true,
  })
  username?: string;

  @Validations({
    name: 'password',
    type: 'string',
    format: 'password',
    required: true,
    autocomplete: 'current-password',
    inputType: 'password',
    icon: 'password',
    label: 'Password',
    hash: true,
  })
  password?: string;

  @Validations({
    defaultValue: false,
    name: 'isAdmin',
    type: 'boolean',
    icon: 'check_box_outline_blank',
    inputType: 'boolean',
  })
  isAdmin?: boolean;
}
