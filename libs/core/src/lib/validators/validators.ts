import {
  MinLength,
  MaxLength,
  Min,
  Max,
  IsNotEmpty,
  IsOptional,
  IsIn,
  IsUUID,
  IsEmail,
  Matches,
  IsPhoneNumber,
  IsUrl,
  IsEAN,
} from 'class-validator';
import { CountryCode } from '../types/CountryCode';
import { IsPassword } from './IsPassword';

export const Validators = {
  required: (value: false | undefined) =>
    value == false ? IsOptional() : IsNotEmpty(),
  enum: (value: string[]) => IsIn(value),
  phone: (value: CountryCode | true) =>
    IsPhoneNumber(value === true ? undefined : value),
  ean: (value: true) => IsEAN(),
  url: (value: true) => IsUrl(),
  before: (value: Date) => Max(value.getTime()),
  after: (value: Date) => Min(value.getTime()),
  email: (value: true) => IsEmail(),
  password: (value: true) => IsPassword(),
  uuid: (value: true) => IsUUID(),
  maximum: (value: number) => Max(value),
  minimum: (value: number) => Min(value),
  minLength: (value: number) => MinLength(value),
  maxLength: (value: number) => MaxLength(value),
};
