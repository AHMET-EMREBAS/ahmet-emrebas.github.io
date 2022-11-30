import { PropertyOptions } from '../types';
import { Property } from './Property';

export type SearchOnePropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default' | 'enum'
>;

export function SearchOneProperty(options: SearchOnePropertyOptions) {
  return Property<string>({
    type: 'object',
    inputType: 'search-one',
    ...options,
  });
}
