import { PropertyOptions } from '../types';
import { Property } from './Property';

export type SearchManyProperty = Pick<
  PropertyOptions<string>,
  'required' | 'default' | 'enum'
>;

export function SearchManyProperty(options: SearchManyProperty) {
  return Property<string>({
    type: 'array',
    inputType: 'search-many',
    ...options,
  });
}
