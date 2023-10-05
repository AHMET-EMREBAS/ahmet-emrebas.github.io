import { Property } from '@techbir/core';

export class LoginWithCodeDto {
  @Property({ name: 'username', type: 'string', format: 'email' })
  username!: string;

  @Property({ name: 'code', type: 'string', minLength: 6, maxLength: 100 })
  code!: string;
}
