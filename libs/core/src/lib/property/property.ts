/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

import { Validators } from '../validators';
import { PropertyOptions } from '../types';

/**
 * Property decorator
 * Add validations and transformers for properties
 * @param options
 * @returns
 */
export function Property<T>(options: PropertyOptions<T>) {
  if (!options.type) {
    throw new Error('Property type is required!');
  }

  const notNull = (e: unknown) => !!e;

  const validators = Object.entries(options)
    .map(([key, value]) => Validators[key]?.(value))
    .filter(notNull);

  validators.push(Validators.required(options.required));

  const transformers = [];

  return applyDecorators(
    Expose(),
    ApiProperty(options),
    ...validators,
    ...transformers
  );
}
