import { Property } from '@techbir/core';

export class ForgotPasswordDto {
  @Property({ name: 'username', type: 'string', format: 'email' })
  username!: string;
}
