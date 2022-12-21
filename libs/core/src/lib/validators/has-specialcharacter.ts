import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'hasSpecialCharacter' })
export class HasSpecialCharacterValidator
  implements ValidatorConstraintInterface
{
  validate(value: string): boolean | Promise<boolean> {
    return /[~!@#$%^&*()_+{}:"<>?]{1,}/.test(value);
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} should contain a special character!`;
  }
}
