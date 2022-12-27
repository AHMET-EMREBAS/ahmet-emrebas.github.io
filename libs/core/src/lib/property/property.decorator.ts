import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PropertyOptions } from '../types';
import {
  MinLength,
  MaxLength,
  Min,
  Max,
  IsEmail,
  IsEAN,
  IsUUID,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { IsPassword } from '../validators';

/**
 * DTO property
 * @param options
 * @returns
 */
export function Property(options: PropertyOptions) {
  const validators = [];

  if (options.minLength) {
    validators.push(MinLength(options.minLength));
  }

  if (options.maxLength) {
    validators.push(MaxLength(options.maxLength));
  }

  if (options.minimum) {
    validators.push(Min(options.minimum));
  }

  if (options.maximum) {
    validators.push(Max(options.maximum));
  }

  if (options.email) {
    validators.push(IsEmail());
  }

  if (options.barcode) {
    validators.push(IsEAN());
  }

  if (options.password) {
    validators.push(IsPassword());
  }

  if (options.uuid) {
    validators.push(IsUUID('4'));
  }

  if (options.required === false) {
    validators.push(IsOptional());
  } else {
    validators.push(IsNotEmpty());
  }
  return applyDecorators(
    Expose(),
    ApiProperty({ ...options, type: options.type?.toLowerCase() }),
    ...validators
  );
}
