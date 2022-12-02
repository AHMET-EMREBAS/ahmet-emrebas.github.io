import { applyDecorators } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';
import { PropertyOptions } from '../types';
import { Property } from './Property';
export type ManyToOnePropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default' | 'enum'
>;

export function ManyToOneProperty(options: ManyToOnePropertyOptions) {
  return applyDecorators(
    Property<string>({
      type: 'object',
      inputType: 'search-one',
      ...options,
    })
  );
}

export function OneToOneProperty(options: ManyToOnePropertyOptions) {
  return ManyToOneProperty(options);
}
