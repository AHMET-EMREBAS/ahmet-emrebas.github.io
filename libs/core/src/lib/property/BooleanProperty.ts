import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields } from './StringProperty';

export type BooleanPropertyOptions = Pick<
  PropertyOptions<boolean>,
  CommonFields
>;

export function BooleanProperty(options: BooleanPropertyOptions) {
  return applyDecorators(
    Field(() => Boolean),
    Property<boolean>({
      type: 'boolean',
      inputType: 'checkbox',
      ...options,
    })
  );
}
