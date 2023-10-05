import { Property } from '@techbir/core';
import { LoginDto } from './login.dto';

export class ResetPasswordWithCodeDto extends LoginDto {
  @Property({ name: 'code', type: 'string', minLength: 6, maxLength: 100 })
  code!: string;
}
