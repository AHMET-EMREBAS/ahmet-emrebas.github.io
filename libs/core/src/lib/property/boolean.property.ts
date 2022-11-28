import { PropertyOptions } from '../types';
import { Property } from './property';

export type BooleanPropertyOptions = Pick<PropertyOptions, 'required'>;

export function BooleanProperty(options: BooleanPropertyOptions) {
  return Property({ type: 'boolean', ...options, inputType: 'checkbox' });
}
