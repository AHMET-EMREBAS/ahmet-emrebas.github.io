import {
  applyDecorators,
  UnprocessableEntityException,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { v4 } from 'uuid';
import {
  IsBoolean,
  IsDate,
  IsEAN,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Column } from 'typeorm';
import { EntityConstructor } from '../shared';
import { IsPassword } from '../validators/is-password';

export enum PropertyType {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  DATE = 'date',
}

export enum PropertyFormat {
  PASSWORD = 'password',
  EMAIL = 'email',
  EAN = 'ean',
  UUID = 'uuid',
  URL = 'url',
  BARCODE = 'barcode',
  PHONE = 'phone',
}

export function ColumnType(propertyType: PropertyType) {
  switch (propertyType) {
    case PropertyType.STRING:
      return 'text';
    case PropertyType.NUMBER:
      return 'numeric';
    case PropertyType.BOOLEAN:
      return 'boolean';
    case PropertyType.INTEGER:
      return 'integer';
    case PropertyType.DATE:
      return 'date';
    default:
      return 'text';
  }
}

export interface BasicPropertyOptions {
  optional?: boolean;
  unique?: boolean;
  update?: boolean;
}

export interface PropertyOptions
  extends Omit<ApiPropertyOptions, 'format' | 'enum' | 'type' | 'required'>,
    BasicPropertyOptions {
  format?: PropertyFormat;
  enum?: (string | number)[];
  type: PropertyType;
}

function apiPropertyOptions(options: PropertyOptions) {
  return ApiProperty({
    ...options,
    required: options.optional === true ? false : true,
    nullable: !!options.optional,
  });
}

function parseValidators(options: PropertyOptions) {
  const validators = [];

  options.minLength && validators.push(MinLength(options.minLength));

  options.maxLength && validators.push(MaxLength(options.maxLength));

  options.minimum && validators.push(Min(options.minimum));

  options.maximum && validators.push(Max(options.maximum));

  switch (options.type) {
    case PropertyType.STRING:
      validators.push(IsString());
      break;

    case PropertyType.BOOLEAN:
      validators.push(IsBoolean());
      break;

    case PropertyType.DATE:
      validators.push(IsDate());
      break;

    case PropertyType.INTEGER:
    case PropertyType.NUMBER:
      validators.push(IsNumber());
      break;
  }

  switch (options.format) {
    case PropertyFormat.PASSWORD:
      validators.push(IsPassword());
      break;

    case PropertyFormat.EAN:
      validators.push(IsEAN());
      break;

    case PropertyFormat.BARCODE:
      validators.push(MinLength(10));
      validators.push(MaxLength(13));
      break;

    case PropertyFormat.UUID:
      validators.push(IsUUID('4'));
      break;

    case PropertyFormat.EMAIL:
      validators.push(IsEmail());
      break;

    case PropertyFormat.URL:
      validators.push(IsUrl());
      break;

    case PropertyFormat.PHONE:
      validators.push(IsPhoneNumber());
      break;
  }

  if (options.optional === true) {
    validators.push(IsOptional({ always: true }));
  } else {
    validators.push(IsNotEmpty());
  }

  options.enum && validators.push(IsIn(options.enum));

  return applyDecorators(...validators);
}

export function Property(options: PropertyOptions) {
  return applyDecorators(
    Expose(),
    apiPropertyOptions(options),
    parseValidators(options),
    Column({
      type: ColumnType(options.type),
      unique: !!options.unique,
      nullable: options.optional === true ? true : false,
      update: options.update === false ? false : true,
      enum: options.enum,
    })
  );
}

export function NameProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    minLength: 2,
    maxLength: 30,
    default: 'Name',
    ...options,
  });
}

export function BooleanProperty(options: BasicPropertyOptions = {}) {
  return applyDecorators(
    Property({
      type: PropertyType.BOOLEAN,
      ...options,
    })
  );
}

export function TextProperty(options: BasicPropertyOptions = {}) {
  return applyDecorators(
    Property({
      type: PropertyType.STRING,
      maxLength: 400,
      default: 'some text',
      ...options,
    })
  );
}
export function LongTextProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    maxLength: 1000,
    default: 'long text',
    ...options,
  });
}

export function EmailProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    format: PropertyFormat.EMAIL,
    default: 'email@gmail.com',
    ...options,
  });
}

export function UUIDProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    format: PropertyFormat.UUID,
    default: v4(),
    ...options,
  });
}

export function BarcodeProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    format: PropertyFormat.BARCODE,
    default: '123456789012',
    ...options,
  });
}

export function PasswordProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    format: PropertyFormat.PASSWORD,
    default: '!Abc123',
    ...options,
  });
}

export function PhoneProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.STRING,
    format: PropertyFormat.PHONE,
    default: '888 888 88 88',
    ...options,
  });
}

export function PositiveNumberProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.NUMBER,
    minimum: 0,
    default: 20.99,
    ...options,
  });
}

export function PositiveIntegerProperty(options: BasicPropertyOptions = {}) {
  return Property({
    type: PropertyType.INTEGER,
    minimum: 0,
    default: 0,
    ...options,
  });
}

export function UrlProperty(options: BasicPropertyOptions = {}) {
  return applyDecorators(
    Property({
      type: PropertyType.STRING,
      format: PropertyFormat.URL,
      default: 'http://localhost:3333/public/imgs/placeholder.png',
      ...options,
    })
  );
}

const commonOptions: ValidationPipeOptions = {
  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
    exposeDefaultValues: false,
  },
  exceptionFactory(errors) {
    throw new UnprocessableEntityException(errors);
  },
};

export function CreateValidationPipe(type: EntityConstructor) {
  return new ValidationPipe({
    ...commonOptions,
    expectedType: type,
  });
}

export function UpdateValidationPipe(type: EntityConstructor) {
  return new ValidationPipe({
    ...commonOptions,
    expectedType: type,
    skipMissingProperties: true,
    skipNullProperties: true,
    skipUndefinedProperties: true,
  });
}
