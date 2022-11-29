import { PropertyOptions } from '../types';
import { Property } from './Property';

export type DatePropertyOptions = Pick<
  PropertyOptions<Date>,
  'required' | 'before' | 'after' | 'default'
>;

export function DateProperty(options: DatePropertyOptions) {
  return Property<Date>({ type: 'date', inputType: 'date', ...options });
}
