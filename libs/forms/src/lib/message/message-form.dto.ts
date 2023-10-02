import { Validations } from '@techbir/common';

export class MessageFormDto {
  @Validations({
    name: 'message',
    type: 'string',
    minLength: 0,
    maxLength: 500,
    required: true,
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'message',
    label: 'Message',
  })
  message?: string;
}
