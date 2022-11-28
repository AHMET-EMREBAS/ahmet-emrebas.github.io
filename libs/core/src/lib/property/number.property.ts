import { PropertyOptions } from '../types';
import { Property } from './property';

export type NumberPropertyOptions = Pick<
  PropertyOptions,
  'required' | 'minimum' | 'maximum'
>;

export function NumberProperty(options: NumberPropertyOptions) {
  return Property({ type: 'number', inputType: 'number', ...options });
}
