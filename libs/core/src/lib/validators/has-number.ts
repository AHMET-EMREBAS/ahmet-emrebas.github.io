import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'hasNumber' })
export class HasNumberValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean | Promise<boolean> {
    return /[0-9]{1,}/.test(value);
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} should contain a number!`;
  }
}
