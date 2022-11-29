import { PropertyOptions } from '../types';
import { Property } from './Property';

export type BooleanPropertyOptions = Pick<
  PropertyOptions<boolean>,
  'required' | 'default'
>;

export function BooleanProperty(options: BooleanPropertyOptions) {
  return Property<boolean>({
    type: 'boolean',
    ...options,
    inputType: 'checkbox',
  });
}
