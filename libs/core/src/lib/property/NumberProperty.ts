import { PropertyOptions } from '../types';
import { Property } from './Property';

export type NumberPropertyOptions = Pick<
  PropertyOptions<number>,
  'required' | 'minimum' | 'maximum' | 'default' | 'enum'
>;

export function NumberProperty(options: NumberPropertyOptions) {
  return Property<number>({ type: 'number', inputType: 'number', ...options });
}
