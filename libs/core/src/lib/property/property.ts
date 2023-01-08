import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

type OtherOptions = {
  required?: boolean;
  unique?: boolean;
};

type PropertyOptions = ApiPropertyOptions & OtherOptions;

function parseValidators(options: PropertyOptions) {
  const validators = [];
  if (options.minLength) validators.push(MinLength(options.minLength));
  if (options.maxLength) validators.push(MinLength(options.maxLength));
  if (options.minimum) validators.push(MinLength(options.minimum));
  if (options.maximum) validators.push(MinLength(options.maximum));

  if (options.required) {
    validators.push(IsNotEmpty());
  } else {
    validators.push(IsOptional());
  }
  return validators;
}

export function Property(options: PropertyOptions) {
  const validators = parseValidators(options);
  return applyDecorators(ApiProperty(options), ...validators);
}
