import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields } from './StringProperty';

export type DatePropertyOptions = Pick<
  PropertyOptions<Date>,
  CommonFields | 'before' | 'after'
>;

export function DateProperty(options: DatePropertyOptions) {
  return applyDecorators(
    Field(() => String),
    Property<Date>({ type: 'date', inputType: 'date', ...options })
  );
}
