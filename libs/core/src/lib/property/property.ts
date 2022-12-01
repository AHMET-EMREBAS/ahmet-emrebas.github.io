/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Validators } from '../validators';
import { PropertyOptions } from '../types';
import { Transformers } from '../transformers/Transformers';
import { ValidateNested } from 'class-validator';
import { GraphFields } from '../graph';

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

  if (!options.inputType) {
    throw new Error('Property inputType is required!');
  }

  const notFalsy = (e: unknown) => !!e;

  const validators = Object.entries(options)
    .map(([key, value]) => Validators[key]?.(value))
    .filter(notFalsy);

  validators.push(Validators.required(options.required));

  if (options.type === 'object') validators.push(ValidateNested());

  if (options.type === 'array') validators.push(ValidateNested({ each: true }));

  return applyDecorators(
    Expose(),
    ApiProperty(options),
    ...validators,
    GraphFields[options.type]({
      defaultValue: options.default,
      nullable: options.required === undefined ? true : options.required,
    }),
    Transformers[options.type]
  );
}
