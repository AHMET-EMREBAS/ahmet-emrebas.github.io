import { Property } from '@techbir/core';

export class LoginDto {
  @Property({
    name:'username',
    type: 'string',
    format: 'email',
    defaultValue: 'aemrebas.dev@gmail.com',
  })
  username!: string;

  @Property({
    name:'password',
    type: 'string',
    format: 'password',
    defaultValue: 'aemrebas.dev@gmail.com1A',
  })
  password!: string;
}
