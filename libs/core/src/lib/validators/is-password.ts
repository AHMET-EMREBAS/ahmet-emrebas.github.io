import { applyDecorators } from '@nestjs/common';
import { Validate } from 'class-validator';
import { HasLowerCaseValidator } from './has-lowercase';
import { HasNumberValidator } from './has-number';
import { HasSpecialCharacterValidator } from './has-specialcharacter';
import { HasUpperCaserValidator } from './has-uppercase';

export function IsPassword() {
  return applyDecorators(
    Validate(HasUpperCaserValidator),
    Validate(HasLowerCaseValidator),
    Validate(HasSpecialCharacterValidator),
    Validate(HasNumberValidator)
  );
}
