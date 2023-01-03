import { applyDecorators } from '@nestjs/common';
import { Matches, MinLength } from 'class-validator';

export function IsPassword() {
  return applyDecorators(
    Matches(/[A-Z]{1,}/, { message: 'Must contain an uppercase letter!' }),
    Matches(/[a-z]{1,}/, { message: 'Must contain a lowercase letter!' }),
    Matches(/[0-9]{1,}/, { message: 'Must contain a number!' }),
    Matches(/[~!@#$%^&*()_+{}:">?<]{1,}/, {
      message: 'Must contain a special character!',
    }),
    MinLength(6, { message: 'Must be at least 6 characters long!' })
  );
}
