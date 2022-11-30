import { PropertyOptions } from '../types';
import { Property } from './Property';

export type ManyToOnePropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default' | 'enum'
>;

export function ManyToOneProperty(options: ManyToOnePropertyOptions) {
  return Property<string>({
    type: 'object',
    inputType: 'search-one',
    ...options,
  });
}

export function OneToOneProperty(options: ManyToOnePropertyOptions) {
  return ManyToOneProperty(options);
}
