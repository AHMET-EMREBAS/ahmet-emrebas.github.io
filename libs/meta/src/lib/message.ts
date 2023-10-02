import { Model, OwnerRelation } from '@techbir/common';

export const MessageModel: Model = {
  name: 'message',
  properties: {
    message: {
      name: 'message',
      type: 'string',
      minLength: 0,
      maxLength: 500,
      required: true,
      inputType: 'text',
      autocomplete: 'off',
      icon: 'message',
      label: 'Message',
    },
  },
  relations: {
    to: OwnerRelation({ name: 'to', target: 'User' }),
    from: OwnerRelation({ name: 'from', target: 'User' }),
  },
};
