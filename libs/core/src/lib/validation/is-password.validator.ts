import { applyDecorators } from '@nestjs/common';
import { Matches } from 'class-validator';

export function IsPassword() {
  applyDecorators(
    Matches(/[A-Z]{1,}/, {
      message: '$property should contain an uppercase letter!',
    }),
    Matches(/[a-z]{1,}/, {
      message: '$property should contain a lowercase letter!',
    }),
    Matches(/[0-9]{1,}/, {
      message: '$property should contain a number!',
    }),
    Matches(/[~!@#$%^&*()_+{}:"<>?]{1,}/, {
      message: '$property should contain a special character!',
    })
  );
}
