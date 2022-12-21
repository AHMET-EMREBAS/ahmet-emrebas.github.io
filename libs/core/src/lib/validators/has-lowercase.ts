import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'hasLowerCase' })
export class HasLowerCaseValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean | Promise<boolean> {
    return /[A-Z]{1,}/.test(value);
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} should contain a lowercase letter!`;
  }
}
