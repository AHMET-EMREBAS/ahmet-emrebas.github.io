import { applyDecorators } from '@nestjs/common';
import { Matches } from 'class-validator';

export function IsPassword() {
  return applyDecorators(
    Matches(/[A-Z]{1,}/, {
      message: 'Password should contain an uppercase letter!',
    }),
    Matches(/[a-z]{1,}/, {
      message: 'Password should contain a lowercase letter!',
    }),
    Matches(/[0-9]{1,}/, { message: 'Password should contain a number!' }),
    Matches(/[!@#$%^&*()_+{}:"<>?~]{1,}/, {
      message: 'Password should contain a special character!',
    })
  );
}
