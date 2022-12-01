import { applyDecorators } from '@nestjs/common';
import { PropertyOptions } from '../types';
import { Property } from './Property';

export type ManyToManyPropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default' | 'enum'
>;

export function ManyToManyProperty(options: ManyToManyPropertyOptions) {
  return applyDecorators(
    Property<string>({
      type: 'array',
      inputType: 'search-many',
      ...options,
    })
  );
}

export function OneToManyProperty(options: ManyToManyPropertyOptions) {
  return ManyToManyProperty(options);
}
