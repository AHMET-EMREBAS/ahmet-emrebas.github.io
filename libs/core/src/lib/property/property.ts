import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  MinLength,
  MaxLength,
  Min,
  Max,
  IsNotEmpty,
  IsOptional,
  IsIn,
} from 'class-validator';
export type PropertyOptions = any;

function add(
  value: unknown,
  arr: unknown[],
  validator: (args?: unknown) => unknown
) {
  if (value !== undefined) arr.push(validator(value));
}

function addSpecial(value: boolean, arr: unknown[], validator: () => unknown) {
  if (value === true) arr.push(validator());
}

/**
 * Add validations and transformers for properties
 * @param o
 * @returns
 */
export function Property(o: ApiPropertyOptions) {
  const v = [];
  if (!o.type) {
    throw new Error('Property type is required!');
  }

  if (o.type === 'string') {
    add(o.minLength, v, MinLength);
    add(o.maxLength, v, MaxLength);
    add(o.enum, v, IsIn);
  }

  if (o.type === 'number') {
    add(o.minimum, v, Min);
    add(o.minimum, v, Max);
  }

  o.required === false ? v.push(IsOptional()) : v.push(IsNotEmpty());

  return applyDecorators(Expose(), ApiProperty(o), ...v);
}
