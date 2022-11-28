import { PropertyOptions } from '../types';
import { Property } from './Property';

export type DatePropertyOptions = Pick<
  PropertyOptions,
  'required' | 'before' | 'after'
>;

export function DateProperty(options: DatePropertyOptions) {
  return Property({ type: 'date', inputType: 'date', ...options });
}
