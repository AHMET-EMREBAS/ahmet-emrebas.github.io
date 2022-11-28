import { PropertyOptions } from '../types';
import { Property } from './property';

export type StringPropertyOptions = Pick<
  PropertyOptions,
  'required' | 'minLength' | 'maxLength'
>;

export function StringProperty(options: StringPropertyOptions) {
  return Property({ type: 'string', inputType: 'text', ...options });
}
