/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { Validators } from '../validators';
import { PropertyOptions } from '../types';
import { StringToTypeTransformer } from '../transformers';

/**
 * Property decorator
 * Add validations and transformers for properties
 * @param options
 * @returns
 */
export function Property(options: PropertyOptions) {
  if (!options.type) {
    throw new Error('Property type is required!');
  }

  const notNull = (e: unknown) => !!e;

  const validators = Object.entries(options)
    .map(([key, value]) => Validators[key]?.(value))
    .filter(notNull);

  validators.push(Validators.required(options.required));

  return applyDecorators(
    Expose(),
    ApiProperty(options),
    ...validators,
    StringToTypeTransformer(options.type)
  );
}
