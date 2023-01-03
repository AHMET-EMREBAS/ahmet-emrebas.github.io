import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import {
  IsBoolean,
  IsBooleanString,
  IsDate,
  IsEAN,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { IsPassword } from '../validators/is-password';
import { Property } from './property.decorator';

export enum ParamType {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  DATE = 'date',
}

export enum ParamFormat {
  PASSWORD = 'password',
  EMAIL = 'email',
  EAN = 'ean',
  UUID = 'uuid',
  URL = 'url',
  ID = 'id',
}

export interface BasicParamOptions {
  optional?: boolean;
  unique?: boolean;
  update?: boolean;
}

export interface ParamOptions
  extends Omit<ApiPropertyOptions, 'format' | 'enum' | 'type' | 'required'>,
    BasicParamOptions {
  type: ParamType;
  format?: ParamFormat;
  enum?: (string | number)[];
}

function apiPropertyOptions(options: ParamOptions) {
  return ApiProperty({
    ...options,
    required: options.optional === true ? false : true,
    nullable: !!options.optional,
  });
}

function parseValidators(options: ParamOptions) {
  const validators = [];

  options.minLength && validators.push(MinLength(options.minLength));

  options.maxLength && validators.push(MaxLength(options.maxLength));

  options.minimum && validators.push(Min(options.minimum));

  options.maximum && validators.push(Max(options.maximum));

  switch (options.type) {
    case ParamType.STRING:
      validators.push(IsString());
      break;

    case ParamType.BOOLEAN:
      validators.push(IsBoolean());
      break;

    case ParamType.DATE:
      validators.push(IsDate());
      break;

    case ParamType.INTEGER:
    case ParamType.NUMBER:
      validators.push(IsNumber());
      break;
  }

  switch (options.format) {
    case ParamFormat.PASSWORD:
      validators.push(IsPassword());
      break;

    case ParamFormat.EAN:
      validators.push(IsEAN());
      break;

    case ParamFormat.UUID:
      validators.push(IsUUID('4'));
      break;

    case ParamFormat.EMAIL:
      validators.push(IsEmail());
      break;

    case ParamFormat.URL:
      validators.push(IsUrl());
      break;
  }

  if (options.optional === true) {
    validators.push(IsOptional({ always: true }));
  } else {
    validators.push(IsNotEmpty());
  }

  options.enum && validators.push(IsIn(options.enum));

  return applyDecorators(
    ...validators,
    Transform(({ value }) => {
      if (value === null) {
        return options.default;
      }

      switch (options.type) {
        case ParamType.NUMBER:
          return parseFloat(value);
        case ParamType.INTEGER:
          return parseInt(value);
        case ParamType.BOOLEAN:
          return ['1', 'true'].includes(value);
        case ParamType.DATE:
          return new Date(value);
        default:
          return value;
      }
    })
  );
}

export function UrlParam(options: ParamOptions) {
  return applyDecorators(
    Expose(),
    apiPropertyOptions(options),
    parseValidators(options)
  );
}
