import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MinLength,
} from 'class-validator';
import { IsPassword } from '../validation';

type OtherOptions = {
  required?: boolean;
  unique?: boolean;
  isPassword?: boolean;
  isEmail?: boolean;
  isUUID?: boolean;
};

type PropertyOptions = ApiPropertyOptions & OtherOptions;

function parseValidators(options: PropertyOptions) {
  const validators = [];
  if (options.minLength) validators.push(MinLength(options.minLength));
  if (options.maxLength) validators.push(MinLength(options.maxLength));
  if (options.minimum) validators.push(MinLength(options.minimum));
  if (options.maximum) validators.push(MinLength(options.maximum));

  if (options.isPassword) validators.push(IsPassword());
  if (options.isUUID) validators.push(IsUUID('4'));
  if (options.isEmail) validators.push(IsEmail());

  if (options.required) {
    validators.push(IsNotEmpty());
  } else {
    validators.push(IsOptional());
  }
  return validators;
}

export function Property(options: PropertyOptions) {
  const validators = parseValidators(options);
  return applyDecorators(Expose(), ApiProperty(options), ...validators);
}
