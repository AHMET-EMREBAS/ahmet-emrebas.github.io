import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import {
  StringBooleanTransformer,
  StringDateTransformer,
  StringIntegerTransformer,
  StringNumberTransformer,
} from '../transformer';
import { IsPassword } from '../validation';

type OtherOptions = {
  type?: 'string' | 'integer' | 'number' | 'boolean' | 'date';
  minimum?: number;
  maximum?: number;
  required?: boolean;
  unique?: boolean;
  isPassword?: boolean;
  isEmail?: boolean;
  isUUID?: boolean;
  isStringBoolean?: boolean;
  isStringInteger?: boolean;
  isStringNumber?: boolean;
  isStringDate?: boolean;
  default?: any;
};

type PropertyOptions = ApiPropertyOptions & OtherOptions;

function parseValidatorAndTransformer(options: PropertyOptions) {
  const list = [];

  if (options.type == 'string') list.push(IsString());
  if (options.type == 'integer') list.push(IsNumber());
  if (options.type == 'boolean') list.push(IsBoolean());
  if (options.type == 'date') list.push(IsDate());

  if (options.minLength) list.push(MinLength(options.minLength));
  if (options.maxLength) list.push(MaxLength(options.maxLength));
  if (options.minimum) list.push(Min(options.minimum));
  if (options.maximum) list.push(Max(options.maximum));

  if (options.isPassword) list.push(IsPassword());
  if (options.isUUID) list.push(IsUUID('4'));
  if (options.isEmail) list.push(IsEmail());

  if (options.required) {
    list.push(IsNotEmpty());
  } else {
    list.push(IsOptional());
  }

  if (options.isStringBoolean)
    list.push(StringBooleanTransformer(options.default));

  if (options.isStringInteger)
    list.push(StringIntegerTransformer(options.default));

  if (options.isStringNumber)
    list.push(StringNumberTransformer(options.default));

  if (options.isStringBoolean)
    list.push(StringBooleanTransformer(options.default));

  if (options.isStringDate) list.push(StringDateTransformer(options.default));

  return list;
}

/**
 * Append api property options and validation decorators
 * @param options
 * @returns
 */
export function Property(options: PropertyOptions) {
  const validatorsAndTransformers = parseValidatorAndTransformer(options);
  return applyDecorators(
    Expose(),
    ApiProperty(options),
    ...validatorsAndTransformers
  );
}
