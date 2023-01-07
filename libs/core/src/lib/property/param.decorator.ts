import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

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

  if (options.optional === true) {
    validators.push(IsOptional({ always: true }));
  } else {
    validators.push(IsNotEmpty());
  }

  options.enum && validators.push(IsIn(options.enum));

  return applyDecorators(
    Transform(({ value }) => {
      if (value === null) {
        return options.default;
      }

      function parseIt() {
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
      }
      const v = parseIt() || null;

      return v;
    }),
    ...validators
  );
}

export function UrlParam(options: ParamOptions) {
  return applyDecorators(
    Expose(),
    apiPropertyOptions(options),
    parseValidators(options)
  );
}
